
import {NgModule} from '@angular/core'
import {NavigationModule} from "./navigation.module";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {EmployeePersonalAreaComponent} from "../main/private/employee/employee-personal-area.component";
import {DashboardComponent} from "../main/private/employee/dashboard/dashboard.component";
import {PatientService} from "../services/patient.service";
import {EmployeeService} from "../services/employee.service";
import {EmployeePatientsComponent} from "../main/private/employee/patients/employee-patients.component";
import {AnimalService} from "../services/animal.service";
import {PatientManagerComponent} from "../main/private/employee/patients/patientManager/patient-manager.component";

@NgModule({
  imports: [
    RouterModule,
    BrowserModule,
    FormsModule,
    NavigationModule
  ],
  declarations: [
    EmployeePersonalAreaComponent,
    DashboardComponent,
    EmployeePatientsComponent,
    PatientManagerComponent
  ],
  providers: [
    PatientService,
    EmployeeService,
    AnimalService
  ]
})

export class EmployeeModule{

}
