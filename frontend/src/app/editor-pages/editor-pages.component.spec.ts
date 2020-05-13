import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorPagesComponent } from './editor-pages.component';

describe('EditorPagesComponent', () => {
  let component: EditorPagesComponent;
  let fixture: ComponentFixture<EditorPagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorPagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
