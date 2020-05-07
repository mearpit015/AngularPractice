import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateReffrenceVarriableComponent } from './template-reffrence-varriable.component';

describe('TemplateReffrenceVarriableComponent', () => {
  let component: TemplateReffrenceVarriableComponent;
  let fixture: ComponentFixture<TemplateReffrenceVarriableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateReffrenceVarriableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateReffrenceVarriableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
