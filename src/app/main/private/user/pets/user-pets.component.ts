
import {Component, OnInit} from '@angular/core'
import {Animal} from "../../../../entity/animal";
import {AnimalService} from "../../../../services/animal.service";

@Component({
  selector: 'user-pets',
  templateUrl: './user-pets.component.html',
  providers: [AnimalService]
})

export class UserPetsComponent implements OnInit{

  private animals: Animal[];

  ngOnInit(): void {

  }

}
