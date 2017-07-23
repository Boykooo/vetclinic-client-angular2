import {Component, OnInit} from "@angular/core";
import {Patient} from "../../../../../entities/patient";
import {PatientService} from "../../../../../services/patient.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

import 'rxjs/add/operator/switchMap'
import {Animal} from "../../../../../entities/animal";
import {Client} from "../../../../../entities/client";
import {AnimalService} from "../../../../../services/animal.service";
import {IssueService} from "../../../../../services/issue.service";
import {IssueInfo} from "../../../../../entities/issueInfo";

@Component({
  selector: "patient-manager",
  templateUrl: "./patient-manager.component.html"
})

export class PatientManagerComponent implements OnInit {

  patient: Patient;
  client: Client;
  issues: IssueInfo[];

  constructor(private patientService: PatientService,
              private animalService: AnimalService,
              private issueService: IssueService,
              private router: Router,
              private route: ActivatedRoute) {
    this.patient = new Patient();
    this.patient.animal = new Animal();
    this.client = new Client();
    this.issues = [];
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
                    this.client = response["data"]["client"];
                  } else {
                    console.log(response["error"]);
                    return;
                  }
                }
              );

            this.issueService.getAllByAnimalIdAndEmail(this.patient.animal.id)
              .subscribe(
                response => {
                  if (response["status"] === "OK") {
                    this.issues = response["data"];
                  } else {
                    console.log(response["error"]);
                    return;
                  }
                }
              )

          } else {
            console.log(response["error"]);
            return;
          }
        }
      );

    // this.issueService.getInvolvedByEmail()
    //   .subscribe(
    //     response => {
    //       if (response["status"] === "OK") {
    //         this.issues = response["data"];
    //       } else {
    //         console.log(response["error"]);
    //         return;
    //       }
    //     }
    //   );


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

  showIssueDetails(id: number): void {
    this.router.navigate(['/issue', id]);
  }
}
