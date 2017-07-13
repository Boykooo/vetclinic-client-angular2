import {Component, OnInit} from '@angular/core';
import {Employee} from "../../../entities/employee";
import {EmployeeService} from "../../../services/employee.service";

@Component({
  selector: 'employee-personal-area',
  templateUrl: './employee-personal-area.component.html',
  providers: [EmployeeService]
})

export class EmployeePersonalAreaComponent implements OnInit{

  private employee: Employee;

  constructor(private employeeService: EmployeeService) {
    this.employee = new Employee();
  }

  ngOnInit(): void {
    this.employeeService.getInfo()
      .subscribe(
        employee => this.employee = employee
      );
  }
}
