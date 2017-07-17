import {Component, OnInit} from "@angular/core";
import {Patient} from "../../../../entities/patient";
import {PatientService} from "../../../../services/patient.service";
import {EmployeeService} from "../../../../services/employee.service";
import {AnimalService} from "../../../../services/animal.service";


@Component({
  selector: "employee-patients",
  templateUrl: "./employee-patients.component.html"
})

export class EmployeePatientsComponent implements OnInit {

  patients: Patient[];

  constructor(private patientService: PatientService,
              private employeeService: EmployeeService,
              private animalService: AnimalService) {

  }

  ngOnInit(): void {
    this.employeeService.getInfo()
      .subscribe(
        response => {
          console.log(response);
          this.patients = response["patients"];
        }
      );
  }

  showDetails(patient: Patient) {
    console.log(patient);
  }

  getClientName(animalId: number): string {
    return this.animalService.getInfoById(animalId)
      .subscribe(
        response => {
          console.log(response);
          return response.client.firstName + " " + response.client.lastName
        }
      ).toString();
  }
}
