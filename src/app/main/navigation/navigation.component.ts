import {Component, OnInit} from '@angular/core'
import {UserService} from "../../services/user.service";
import {User} from "../../entity/user";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  providers: [UserService]
})

export class NavigationComponent implements OnInit {

  private user: User;

  constructor(private userService: UserService,
              private authService: AuthService) {
  }

  ngOnInit(): void {
    this.user = new User();
  }

  login(): void {
    // this.authService.userAuth(this.user)
    //   .subscribe(
    //     body => {
    //       if (body.status )
    //     }
    //   )
  }

  registr(): void {
    this.userService.addEntity(this.user)
  }
}
