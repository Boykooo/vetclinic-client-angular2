import {Component} from '@angular/core'
import {Employee} from "../entity/employee";

@Component({
  selector: 'admin-auth',
  templateUrl: './admin-auth.component.html',
})

export class AdminAuthComponent {
  private employee: Employee;
}
