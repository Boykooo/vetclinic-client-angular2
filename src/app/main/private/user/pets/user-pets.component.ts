
import {Component, OnInit} from '@angular/core'
import {Animal} from "../../../../entity/animal";

@Component({
  selector: 'user-pets',
  templateUrl: './user-pets.component.html'
})

export class UserPetsComponent implements OnInit{

  private animals: Animal[];
  test: string;

  ngOnInit(): void {

  }

  setTest(test: string) : void{
    this.test = test;
  }
}
