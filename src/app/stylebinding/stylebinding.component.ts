import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stylebinding',
  templateUrl: './stylebinding.component.html',
  styleUrls: ['./stylebinding.component.css']
})
export class StylebindingComponent implements OnInit {
 public hasError = true;
 public highlightColor ="orange";
 public styles = {
   color:"blue",
   fontStyle : "italic"  // we have to use camel case
 }
  constructor() { }

  ngOnInit(): void {
  }

}
