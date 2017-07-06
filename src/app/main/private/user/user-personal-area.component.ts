import {Component, OnInit} from '@angular/core';
import {User} from "../../../entity/user";
import {UserPetsComponent} from "./pets/user-pets.component";
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'user-personal-area',
  templateUrl: './user-personal-area.component.html'
})

export class UserPersonalAreaComponent implements OnInit{
  private user: User;

  constructor() {}

  ngOnInit(): void {

  }
}
