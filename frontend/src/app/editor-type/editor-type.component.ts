import { Component, OnInit, Input, Output, EventEmitter, ElementRef, HostListener } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FormModel } from '../models/FormModel';

@Component({
  selector: 'app-editor-type',
  templateUrl: './editor-type.component.html',
  styleUrls: ['./editor-type.component.css']
})
export class EditorTypeComponent implements OnInit {

  public objectKeys = Object.keys;
  public types = FormModel.TypeElement;
  private iframeMouseOver: boolean;

  @Input() address: FormGroup;
  @Input() formConfig: any;

  // @Output() iframeClick = new EventEmitter<ElementRef>();

  constructor() { }

  ngOnInit() {

  }

  // @HostListener('mouseover')
  // private onIframeMouseOver() {
  //   console.log('Iframe mouse over');
  //   this.iframeMouseOver = true;
  //   this.resetFocusOnWindow();
  // }

  // private resetFocusOnWindow() {
  //   setTimeout(() => {
  //     console.log('reset focus to window');
  //     window.focus();
  //   }, 100);
  // }
}
