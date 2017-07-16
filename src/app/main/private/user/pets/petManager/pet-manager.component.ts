import {Component, ElementRef, Input, OnInit, ViewChild} from "@angular/core";
import {Animal} from "../../../../../entities/animal";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {AnimalService} from "../../../../../services/animal.service";

import 'rxjs/add/operator/switchMap'
import {PatientService} from "../../../../../services/patient.service";
import {Patient} from "../../../../../entities/patient";

@Component({
  selector: 'pet-manager',
  templateUrl: './pet-manager.component.html'
})

export class PetManagerComponent implements OnInit {

  animal: Animal;
  patient: Patient;

  @ViewChild('fileInput') inputEl: ElementRef;

  constructor(private route: ActivatedRoute,
              private animalService: AnimalService,
              private patientService: PatientService) {
    this.animal = new Animal();
    this.patient = new Patient();
  }

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.animalService.getInfoById(+params.get('id')))
      .subscribe(animal => {
        this.animal = animal;
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
            console.log("invoke");
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
}
