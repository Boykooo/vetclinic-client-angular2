import {Component, OnInit} from "@angular/core";
import {Patient} from "../../../../entities/patient";
import {PatientService} from "../../../../services/patient.service";
import {EmployeeService} from "../../../../services/employee.service";


@Component({
  selector: "employee-patients",
  templateUrl: "./employee-patients.component.html"
})

export class EmployeePatientsComponent implements OnInit {

  patients: Patient[];

  constructor(private patientService: PatientService,
              private employeeService: EmployeeService) {

  }

  ngOnInit(): void {
    this.employeeService.getInfo()
      .subscribe(
        response => this.patients = response["patients"]
      );
  }

  showDetails(patient: Patient) {
    console.log(patient);
  }
}
