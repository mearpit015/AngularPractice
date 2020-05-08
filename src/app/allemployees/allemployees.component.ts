import { Component, OnInit } from '@angular/core';
import {EmployeeserviceService} from '../employeeservice.service'

@Component({
  selector: 'app-allemployees',
  templateUrl: './allemployees.component.html',
  styleUrls: ['./allemployees.component.css']
})
export class AllemployeesComponent implements OnInit {
  public employeesdata=[];

  constructor(private _employee:EmployeeserviceService) { }

  ngOnInit(): void {
    this.getEmployeelist();
  }
  getEmployeelist(){
    this._employee.getEmployeeData().subscribe(emp => this.employeesdata =emp);
  }

}
