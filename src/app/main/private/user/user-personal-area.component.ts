import {Component, OnInit} from '@angular/core';
import {User} from "../../../entity/user";
import {UserPetsComponent} from "./pets/user-pets.component";

@Component({
  selector: 'user-personal-area',
  templateUrl: './user-personal-area.component.html'
})

export class UserPersonalAreaComponent implements OnInit{
  private user: User;

  ngOnInit(): void {
    this.user = new User();
    this.user.email = 'test';
    this.user.firstName = 'test';
    this.user.lastName = 'asdas';
    this.user.phoneNumber = 'asdas';
    this.user.regDate = new Date();
  }
}
