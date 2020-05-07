import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent implements OnInit {
  public name="Arpit";
  public namelabel ="";
  constructor() { }

  ngOnInit(): void {
  }
  
  greetClick(event){
    console.log(event.type);
    this.namelabel= "Hello "+ this.name;
  }

}
