import {Component, OnInit} from '@angular/core'
import {UserService} from "../../services/user.service";
import {User} from "../../entities/user";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  providers: [UserService]
})

export class NavigationComponent implements OnInit {

  private user: User;
  private error: string;
  private userType: string;

  constructor(private userService: UserService,
              private authService: AuthService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.user = new User();
  }

  login(): void {
    this.authService.userAuth(this.user)
      .subscribe(
        body => {
          if (body.status === "OK") {
            this.userType = body.userType;
            if (this.userType === "CLIENT") {
              this.router.navigate(['/user']);
            } else {
              this.router.navigate(['/employee']);
            }
          } else {
            this.error = body.error;
          }
        }
      )
  }

  registr(): void {
    this.userService.addEntity(this.user)
  }

  isLogin(): boolean {
    return this.authService.isLogin();
  }

  goToPersonalArea(): void {
    if (this.userType === "CLIENT") {
      this.router.navigate(['/user']);
    } else {
      this.router.navigate(['/employee']);
    }
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/'])
  }
}
