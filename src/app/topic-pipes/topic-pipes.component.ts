import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topic-pipes',
  templateUrl: './topic-pipes.component.html',
  styleUrls: ['./topic-pipes.component.css']
})
export class TopicPipesComponent implements OnInit {
  public birthdate = new Date('13 Sep 2016, 10:15 PM'); //Apr 15, 1988
  public name = "Arpit";
  public employeedata = [{"id":"1","name":"Raj"},
                         {"id":"2","name":"Rahul"},
                         {"id":"3","name":"Rakesh"},
                         {"id":"4","name":"Ram"},
                         {"id":"5","name":"Rahul"}
                        ];
   decimal_value: number = 5.123456789;                     
  constructor() { }

  ngOnInit(): void {
  }

}
