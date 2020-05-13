import { Component, OnInit, ViewChild, ElementRef, Renderer2, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { FormModel } from '../models/FormModel';

declare var $: any;

@Component({
  selector: 'app-editor-pages',
  templateUrl: './editor-pages.component.html',
  styleUrls: ['./editor-pages.component.css']
})
export class EditorPagesComponent implements OnInit{

  public objectKeys = Object.keys;
  myForm: FormGroup;
  public formConfigStart = "TITLE";
  public formNuevo: string;

  @ViewChild('iframe', {static: false}) iframe: ElementRef;

  public formConfigPage = {
    "TITLE": {
      form:{
        title1: {
          name: 'Title 1',
          type: FormModel.TypeElement.INPUT_TEXT,
        },
        title2: {
          name: 'Title 2',
          type: FormModel.TypeElement.INPUT_NUMBER,
        },
        title3: {
          name: 'Title 3',
          type: FormModel.TypeElement.TEXTAREA,
        },
      },
    },
    "FORM": {
      form:{
        form1: {
          name: 'Form 1',
          type: FormModel.TypeElement.INPUT_TEXT,
        },
        form2: {
          name: 'Form 2',
          type: FormModel.TypeElement.INPUT_TEXT,
        },
        form3: {
          name: 'Form 3',
          type: FormModel.TypeElement.INPUT_TEXT,
        },
      },
    },
    "TERMS": {
      form:{
        terms1: {
          name: 'TERM 1',
          type: FormModel.TypeElement.TEXTAREA,
        },
        terms2: {
          name: 'TERM 2',
          type: FormModel.TypeElement.TEXTAREA,
        },
        terms3: {
          name: 'TERM 3',
          type: FormModel.TypeElement.TEXTAREA,
        },
      },
    }
  }

  public formConfig = this.formConfigPage[this.formConfigStart].form;

  public hola = "";

  constructor(private fb: FormBuilder, 
              private renderer: Renderer2,
              private http: HttpClient
              ) { }

              
  ngOnInit() {

    this.createForm(this.formConfigStart);

    var url = "http://localhost:8888/html/prepage.html";

    this.http.get(url, {responseType: 'text'}).subscribe(
      result => {
        this.setIframeAndFunctions(result);
      }
    );
    // this.renderer.listen("document", "click", () => {
    //   console.log("CLickkkkk");
    // });
  }

  setIframeAndFunctions(html: string){
    let doc = this.iframe.nativeElement.contentDocument;
    doc.open();
    doc.write(html);
    doc.close();

    console.log(this.iframe.nativeElement.contentDocument);
  
    $(this.iframe.nativeElement).contents().find("body [data-editable]").on('click',
      event => {
      let name = $(event.currentTarget).attr('data-editable');
      this.createForm(name);
    });    
  }

  createForm(name: string){
    this.formConfig = this.formConfigPage[name].form;
    console.log("PROBLEM HERE");
    console.log(name);

    var configPram;
    this.myForm = this.fb.group({});

    for(var p in this.formConfig){
      configPram = this.formConfig[p];
      this.myForm.addControl(p, new FormControl(''));
    }
  }

  getForm(){
    // console.log(this.myForm.value);
    this.createForm('FORM');
  }

  // @HostListener('document:click', ['$event.target'])
  // onClick(element: HTMLElement) {
  //   console.log('hola');
  //   if(element.classList.contains('do-not-click-here')) {
  //     this.createForm(name);
  //   }
  // }
}
