import {Component, OnInit} from "@angular/core";
import {Patient} from "../../../../entities/patient";
import {PatientService} from "../../../../services/patient.service";
import {EmployeeService} from "../../../../services/employee.service";
import {AnimalService} from "../../../../services/animal.service";
import {forEach} from "@angular/router/src/utils/collection";


@Component({
  selector: "employee-patients",
  templateUrl: "./employee-patients.component.html"
})

export class EmployeePatientsComponent implements OnInit {

  patients: Patient[];
  clientNames = [];

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

          this.patients.forEach(
            patient => {

              this.animalService.getInfoById(patient.animal.id)
                .subscribe(
                  response => {
                    this.clientNames.push(
                      patient.animal.id,
                      response.client.firstName + " " + response.client.lastName
                    );
                  }
                );

            }
          )
        }
      );
  }

  showDetails(patient: Patient) {
    console.log(patient);
  }

  getClientName(animalId: number): string {
    return this.clientNames[animalId];
  }
}
