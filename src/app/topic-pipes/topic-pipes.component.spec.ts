import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicPipesComponent } from './topic-pipes.component';

describe('TopicPipesComponent', () => {
  let component: TopicPipesComponent;
  let fixture: ComponentFixture<TopicPipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicPipesComponent ]
    })
    .compileComponents(); 
  })); 

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
