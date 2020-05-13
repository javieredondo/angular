import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorTypeComponent } from './editor-type.component';

describe('EditorTypeComponent', () => {
  let component: EditorTypeComponent;
  let fixture: ComponentFixture<EditorTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
