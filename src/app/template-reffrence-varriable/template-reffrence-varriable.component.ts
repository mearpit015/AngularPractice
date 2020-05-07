import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-reffrence-varriable',
  templateUrl: './template-reffrence-varriable.component.html',
  styleUrls: ['./template-reffrence-varriable.component.css']
})
export class TemplateReffrenceVarriableComponent implements OnInit {
  public name ="Arpit"
  constructor() { }

  ngOnInit(): void {
  }
  logMessage(value){
    console.log(value);
  }
}
