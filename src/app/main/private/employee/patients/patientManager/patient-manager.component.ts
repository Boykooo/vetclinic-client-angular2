import {Component, OnInit} from "@angular/core";
import {Patient} from "../../../../../entities/patient";
import {PatientService} from "../../../../../services/patient.service";
import {ActivatedRoute, ParamMap} from "@angular/router";

import 'rxjs/add/operator/switchMap'
import {Animal} from "../../../../../entities/animal";
import {Client} from "../../../../../entities/client";
import {AnimalService} from "../../../../../services/animal.service";

@Component({
  selector: "patient-manager",
  templateUrl: "./patient-manager.component.html"
})

export class PatientManagerComponent implements OnInit {

  patient: Patient;
  user: Client;

  constructor(private patientService: PatientService,
              private animalService: AnimalService,
              private route: ActivatedRoute) {
    this.patient = new Patient();
    this.patient.animal = new Animal();
    this.user = new Client();
  }

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.patientService.getInfoById(+params.get('id')))
      .subscribe(
        response => {
          if (response["status"] === "OK") {
            this.patient = response["data"];
            this.animalService.getInfoById(this.patient.animal.id)
              .subscribe(
                response => {
                  if (response["status"] === "OK") {
                    this.user = response["data"]["client"];
                  } else {
                    console.log(response["error"]);
                  }
                }
              );
          } else {
            console.log(response["error"]);
          }
        }
      );
  }

  done(): void {
    this.patient.status = "DONE";
    this.updatePatient();
  }

  rejection(): void {
    this.patient.status = "REJECTED";
    this.updatePatient();
  }

  private updatePatient(): void {
    this.patientService.updateEntity(this.patient)
      .subscribe(
        response => {
          if (response["status"] !== "OK") {
            console.log(response["error"]);
          }
        }
      );
  }


}
