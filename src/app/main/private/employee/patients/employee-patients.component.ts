import {Component, OnInit} from "@angular/core";
import {Patient} from "../../../../entities/patient";
import {PatientService} from "../../../../services/patient.service";
import {EmployeeService} from "../../../../services/employee.service";
import {AnimalService} from "../../../../services/animal.service";
import {Router} from "@angular/router";

import * as _ from "lodash";
import {EsService} from "../../../../services/es.service";
import {EsPatient} from "../../../../entities/es-patient";


@Component({
  selector: "employee-patients",
  templateUrl: "./employee-patients.component.html"
})

export class EmployeePatientsComponent implements OnInit {

  patients: Patient[];
  clientNames = {};


  esPatients: EsPatient[];

  constructor(private patientService: PatientService,
              private employeeService: EmployeeService,
              private animalService: AnimalService,
              private esService: EsService,
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

    this.esService.getEmployeePatients()
      .subscribe(
        response => {
          if (response["status"] === "OK") {
            console.log("asd", response);
            this.esPatients = response["data"];
          } else {
            console.log(response["error"]);
          }
        }
      )
  }

  showDetails(patient: Patient) {
    this.router.navigate(['/employee/patients', patient.id]);
  }

  getClientName(animalId: number): string {
    return this.clientNames[animalId];
  }

  onInput(inputBox: any) {

    for (let esPatient of this.esPatients) {
      if ((_.isEqual(esPatient.clientName, inputBox.value))) {
        return;
      }
    }

    // this.esService.searchByPrefix(inputBox.value)
    //   .subscribe(
    //     response => {
    //       this.esPatients = response["data"];
    //     }
    //   )
  }

  onSelect(inputBox: any) {
    console.log("select", inputBox.value);
  }
}
