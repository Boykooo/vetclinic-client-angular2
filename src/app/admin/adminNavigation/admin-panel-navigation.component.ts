import {Component} from '@angular/core'
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'admin-panel-navigation',
  templateUrl: './admin-panel-navigation.component.html'
})
export class AdminPanelNavigationComponent {

  constructor(private authService: AuthService,
              private router: Router) {

  }

  logout(): void {
    console.log("invoke")
    this.authService.logout();
    this.router.navigate(['/admin']);
  }
}
