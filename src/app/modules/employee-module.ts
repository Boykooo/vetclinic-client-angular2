
import {NgModule} from '@angular/core'
import {NavigationModule} from "./navigation.module";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {EmployeePersonalAreaComponent} from "../main/private/employee/employee-personal-area.component";
import {DashboardComponent} from "../main/private/employee/dashboard/dashboard.component";
import {PatientService} from "../services/patient.service";

@NgModule({
  imports: [
    RouterModule,
    BrowserModule,
    FormsModule,
    NavigationModule
  ],
  declarations: [
    EmployeePersonalAreaComponent,
    DashboardComponent
  ],
  providers: [
    PatientService
  ]
})

export class EmployeeModule{

}
