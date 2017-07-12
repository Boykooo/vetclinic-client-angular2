import {Component, OnInit} from "@angular/core";
import {Animal} from "../../../../../entity/animal";

@Component({
  selector: 'pet-manager',
  templateUrl: './pet-manager.component.html'
})

export class PetManagerComponent implements OnInit {

  public animal: Animal;

  constructor() {

  }

  ngOnInit(): void {
    this.animal = new Animal();
  }
}
