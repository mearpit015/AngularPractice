import { Component, OnInit } from '@angular/core';
import {EmployeeserviceService} from '../employeeservice.service'
import { from } from 'rxjs';
@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {
  public employeesdata=[];
  constructor(private _employee:EmployeeserviceService) { }

  ngOnInit(): void {
    this.getEmployeelist();
  }
  getEmployeelist(){
    this._employee.getEmployeeData().subscribe(emp => this.employeesdata =emp);
  }
}
