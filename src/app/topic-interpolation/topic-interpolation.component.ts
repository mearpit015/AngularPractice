import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'interpolation',
  templateUrl: './topic-interpolation.component.html',
  styleUrls: ['./topic-interpolation.component.css']
})
export class TopicInterpolationComponent  implements OnInit 
{
   public topic = "Interpolation"; //simplest way to bind the data from the class to a template. using{{}}
   public siteUrl= window.location.href;
  constructor() { }

  ngOnInit(): void {
  }
  greetUser(){
    return "Topic "+ this.topic;
  }
}
