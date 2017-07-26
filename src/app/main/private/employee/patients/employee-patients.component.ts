import {Component, OnInit} from "@angular/core";
import {Patient} from "../../../../entities/patient";
import {PatientService} from "../../../../services/patient.service";
import {EmployeeService} from "../../../../services/employee.service";
import {AnimalService} from "../../../../services/animal.service";
import {Router} from "@angular/router";
import {PagerService} from "../../../../services/pager-service.service";

import * as _ from "lodash";
import {EsService} from "../../../../services/es.service";
import {EsPatient} from "../../../../entities/es-patient";
import {Client} from "../../../../entities/client";
import {Animal} from "../../../../entities/animal";


@Component({
  selector: "employee-patients",
  templateUrl: "./employee-patients.component.html"
})

export class EmployeePatientsComponent implements OnInit {

  pagedPatients: Patient[];
  clientNames = {};

  patientsCount: number;

  // pager object
  pager: any = {};

  esPatients: EsPatient[];

  constructor(private patientService: PatientService,
              private employeeService: EmployeeService,
              private animalService: AnimalService,
              private router: Router,
              private pagerService: PagerService,
              private esService: EsService) {
  }

  ngOnInit(): void {

    this.pagedPatients = [];

    this.patientService.getCount()
      .subscribe(
        response => {
          if (response["status"] === "OK") {
            this.patientsCount = response["data"];
            this.setPage(1);

          } else {
            console.log(response["error"]);
          }
        }
      );

    this.esService.getEmployeePatients()
      .subscribe(
        response => {
          if (response["status"] === "OK") {
            this.esPatients = response["data"];


          } else {
            console.log(response["error"]);
          }
        }
      )
  }

  setPage(page: number): void {
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }
    // get pager object from service
    this.pager = this.pagerService.getPager(this.patientsCount, page);

    this.patientService.getLimit(this.pager.currentPage - 1, this.pager.amount)
      .subscribe(
        response => {
          if (response["status"] === "OK") {
            this.pagedPatients = response["data"];

            for (let patient of this.pagedPatients) {
              this.animalService.getInfoById(patient.animal.id)
                .subscribe(
                  response => {
                    if (response["status"] === "OK") {
                      let animal: Animal = response["data"];
                      this.clientNames[animal.id] = animal.client.firstName + " " + animal.client.lastName;
                    } else {
                      console.log(response["error"])
                    }
                  }
                )
            }
          } else {
            console.log(response["error"]);
          }
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

  onSelect(inputBox: any) {
    for (let esPatient of this.esPatients) {
      if ((_.isEqual(esPatient.clientName, inputBox.value))) {
        console.log(esPatient.patientId);
        this.router.navigate(['/employee/patients', esPatient.patientId]);
        break;
      }
    }
  }
}
