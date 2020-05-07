import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stuctural-directive',
  templateUrl: './stuctural-directive.component.html',
  styleUrls: ['./stuctural-directive.component.css']
})
export class StucturalDirectiveComponent implements OnInit {
  public name ="Arpit";
  public annonymous = "Dummy";
  public isVissible = true;
  public color ="black";
  public users = ["Rahul","Raj","Rakesh","Ramesh"]
  constructor() { }

  ngOnInit(): void {
  }

}
