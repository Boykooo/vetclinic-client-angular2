import {Component, Input, OnInit} from "@angular/core";
import {Animal} from "../../../../../entities/animal";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {AnimalService} from "../../../../../services/animal.service";

import 'rxjs/add/operator/switchMap'

@Component({
  selector: 'pet-manager',
  templateUrl: './pet-manager.component.html'
})

export class PetManagerComponent implements OnInit {

  public animal: Animal;

  constructor(private route: ActivatedRoute,
              private animalService: AnimalService) {
    this.animal = new Animal();
  }

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.animalService.getInfoById(+params.get('id')))
      .subscribe(animal => {
        this.animal = animal;
      });
  }
}
