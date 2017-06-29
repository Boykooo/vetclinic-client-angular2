import {Component, OnInit} from '@angular/core'
import {UserService} from "../../services/user.service";
import {User} from "../../entity/user";

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  providers: [UserService]
})

export class NavigationComponent implements OnInit {

  private user: User;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.user = new User();
  }

  registr(): void {
    this.userService.addEntity(this.user)
  }
}
