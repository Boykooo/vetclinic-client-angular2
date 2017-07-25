import {Component, OnInit} from "@angular/core";
import {Patient} from "../../../../entities/patient";
import {PatientService} from "../../../../services/patient.service";
import {EmployeeService} from "../../../../services/employee.service";
import {AnimalService} from "../../../../services/animal.service";
import {forEach} from "@angular/router/src/utils/collection";
import {Router} from "@angular/router";
import {Client} from "../../../../entities/client";

import * as _ from "lodash";


@Component({
  selector: "employee-patients",
  templateUrl: "./employee-patients.component.html"
})

export class EmployeePatientsComponent implements OnInit {

  patients: Patient[];
  clientNames = {};

  selectedClient: any;

  clients = ["asd", "qweqwe", "olololo"];

  constructor(private patientService: PatientService,
              private employeeService: EmployeeService,
              private animalService: AnimalService,
              private router: Router) {
  }

  ngOnInit(): void {

    this.patientService.getInProgress()
      .subscribe(
        response => {
          this.patients = response["data"];
          this.patients.forEach(
            patient => {
              this.animalService.getInfoById(patient.animal.id)
                .subscribe(
                  response => {
                    let client = response["data"]["client"];
                    this.clientNames[patient.animal.id] = client.firstName + " " + client.lastName;
                  }
                );
            }
          )
        }
      );
  }

  showDetails(patient: Patient) {
    this.router.navigate(['/employee/patients', patient.id]);
  }

  getClientName(animalId: number): string {
    return this.clientNames[animalId];
  }

  onInput(inputBox: any) {

    for (let client of this.clients) {
      if ((_.isEqual(client, inputBox.value))) {
        return;
      }
    }

    console.log(inputBox.value);
  }

  onSelect(inputBox: any) {
    console.log("select", inputBox.value);
  }

}
