import {Component, OnInit} from '@angular/core';
import {User} from "../../../entity/user";
import {UserPetsComponent} from "./pets/user-pets.component";
import {AuthService} from "../../../services/auth.service";
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'user-personal-area',
  templateUrl: './user-personal-area.component.html',
  providers: [UserService]
})

export class UserPersonalAreaComponent implements OnInit {
  private user: User;

  constructor(private userService: UserService) {
    this.user = new User();
  }

  ngOnInit(): void {
    this.userService.getInfo().subscribe(
      user => this.user = user
    )
  }
}
