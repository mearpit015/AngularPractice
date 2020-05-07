import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicInterpolationComponent } from './topic-interpolation.component';

describe('TopicInterpolationComponent', () => {
  let component: TopicInterpolationComponent;
  let fixture: ComponentFixture<TopicInterpolationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicInterpolationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicInterpolationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
