import {Component, OnInit} from '@angular/core';
import {Employee} from "../../entity/employee";
import {EmployeeService} from "../../services/employee.service";
import {Http} from "@angular/http";

@Component({
  selector: 'employee-table',
  templateUrl: './employee-table.component.html',
  providers: [EmployeeService]
})

export class EmployeeTableComponent implements OnInit {

  employees: Employee[] = [];
  employee: Employee;
  roles: any[];
  selectedRole: number;

  constructor(private employeeService: EmployeeService,
              private http: Http) {
  }

  ngOnInit(): void {
    this.employeeService.getAll().subscribe(res => this.employees = res);
    this.employee = new Employee();
    this.roles = [];
    this.roles.push({id:1, name: 'EMPLOYEE'});
    this.roles.push({id:2, name: 'ADMIN'});
    this.selectedRole = 1;
  }

  addEmployee(): void {
    this.employee.role = this.roles[this.selectedRole].name;
    console.log(this.employee);
    this.employeeService.addEntity(this.employee);
  }

  updateEmployee(): void {
    this.employee.role = this.roles[this.selectedRole].name;
    this.employeeService.updateEntity(this.employee);
  }

  deleteEmployee(): void {
    this.employeeService.deleteEntity(this.employee.email);
  }
}

