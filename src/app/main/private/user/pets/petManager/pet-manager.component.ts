import {Component, ElementRef, Input, OnInit, ViewChild} from "@angular/core";
import {Animal} from "../../../../../entities/animal";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {AnimalService} from "../../../../../services/animal.service";

import 'rxjs/add/operator/switchMap'
import {PatientService} from "../../../../../services/patient.service";
import {Patient} from "../../../../../entities/patient";
import {IssueForm} from "../../../../../entities/issue-form";
import {ClientService} from "../../../../../services/client.service";

@Component({
  selector: 'pet-manager',
  templateUrl: './pet-manager.component.html'
})

export class PetManagerComponent implements OnInit {

  animal: Animal;
  patient: Patient;
  clientRequest: IssueForm;

  @ViewChild('fileInput') inputEl: ElementRef;

  constructor(private route: ActivatedRoute,
              private animalService: AnimalService,
              private patientService: PatientService,
  private clientService: ClientService) {
    this.animal = new Animal();
    this.animal.patient = new Patient();
    this.patient = new Patient();
    this.clientRequest = new IssueForm();
  }

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.animalService.getInfoById(+params.get('id')))
      .subscribe(response => {
        if (response["status"] === "OK") {
          this.animal = response["data"];
          console.log(this.animal);
        } else {
          console.log(response["error"])
        }
      });
  }

  refreshData(): void {
    this.animalService.updateEntity(this.animal)
      .subscribe(
        response => {
          if (response.status === "OK") {
            let inputEl: HTMLInputElement = this.inputEl.nativeElement;
            let formData = new FormData();
            formData.append('file', inputEl.files.item(0));
            this.animalService.updateImage(this.animal.id, formData)
              .subscribe(
                response => {
                  if (response.status != "OK") {
                    console.log(response.error);
                  }
                }
              );
          }
        }
      )
  }

  petFellIll() {
    this.patient.animal = this.animal;
    this.patientService.addEntity(this.patient)
      .subscribe(
        response => {
          if (response["status"] != "OK") {
            console.log(response["error"]);
          }
        }
      )
  }

  sendClientRequest(): void {
    this.clientRequest.animalId = this.animal.id;
    console.log(this.clientRequest);
    this.clientService.sendClientRequest(this.clientRequest)
      .subscribe(
        response => {
          if (response["status"] !== "OK") {
            console.log(response["error"]);
          }
        }
      );
  }
}
