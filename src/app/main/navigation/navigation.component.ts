import {Component, OnInit} from '@angular/core'
import {ClientService} from "../../services/client.service";
import {Client} from "../../entities/client";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {RegistrationForm} from "../../entities/registration-form";

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  providers: [ClientService]
})

export class NavigationComponent implements OnInit {

  registrationForm: RegistrationForm;
  user: Client;
  error: string;
  userType: string;

  constructor(private userService: ClientService,
              private authService: AuthService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.user = new Client();
    this.registrationForm = new RegistrationForm();
  }

  login(): void {
    this.authService.userAuth(this.user)
      .subscribe(
        body => {
          if (body.status === "OK") {
            this.userType = body.userType;
            if (this.userType === "CLIENT") {
              this.router.navigate(['/client']);
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
    this.authService.registration(this.registrationForm)
      .subscribe();
  }

  isLogin(): boolean {
    return this.authService.isLogin();
  }

  goToPersonalArea(): void {
    console.log(this.authService.getUserType());
    if (this.authService.getUserType() === "CLIENT") {
      this.router.navigate(['/client']);
    } else {
      this.router.navigate(['/employee']);
    }
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/'])
  }
}
