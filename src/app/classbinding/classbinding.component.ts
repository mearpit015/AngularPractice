import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classbinding',
  templateUrl: './classbinding.component.html',
  styleUrls: ['./classbinding.component.css']
})
export class ClassbindingComponent implements OnInit {
  public name ="Arpit"
  public successClass="text-success";
  public errorClass ="text-danger";
  public hasError=true;
  public messageClasses ={
    "text-success" : !this.hasError,
    "text-danger" :  this.hasError
  }
  constructor() { }

  ngOnInit(): void {
  }

}
