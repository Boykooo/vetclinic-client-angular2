import {Component, OnInit} from '@angular/core'
import {Animal} from "../../../../entity/animal";
import {AnimalService} from "../../../../services/animal.service";

@Component({
  selector: 'user-pets',
  templateUrl: './user-pets.component.html'
})

export class UserPetsComponent implements OnInit {

  public animals: Animal[];

  constructor(private animalService: AnimalService) {
  }

  ngOnInit(): void {
    this.animalService.getAll().subscribe(
      animals => {
        this.animals = animals;
      }
    );
  }
}
