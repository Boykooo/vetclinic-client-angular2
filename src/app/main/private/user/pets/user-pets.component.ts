
import {Component, OnInit} from '@angular/core'
import {Animal} from "../../../../entity/animal";

@Component({
  selector: 'user-pets',
  templateUrl: './user-pets.component.html'
})

export class UserPetsComponent implements OnInit{

  private animals: Animal[];

  ngOnInit(): void {

  }

}
