import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {UserTableComponent} from "../admin/userTable/user-table.component";
import {WelcomeComponent} from "../main/welcome/welcome.component";
import {EmployeeTableComponent} from "../admin/employeeTable/employee-table.component";
import {AboutComponent} from "../main/welcome/staticPages/about/about.component";
import {AdminAuthComponent} from "../admin/admin-auth.component";
import {UserPersonalAreaComponent} from "../main/private/user/user-personal-area.component";
import {UserPetsComponent} from "../main/private/user/pets/user-pets.component";
import {EmployeePersonalAreaComponent} from "../main/private/employee/employee-personal-area.component";
import {PetManagerComponent} from "../main/private/user/pets/petManager/pet-manager.component";
import {DashboardComponent} from "../main/private/employee/dashboard/dashboard.component";
import {EmployeePatientsComponent} from "../main/private/employee/patients/employee-patients.component";
import {PatientManagerComponent} from "../main/private/employee/patients/patientManager/patient-manager.component";
import {ContactsComponent} from "../main/welcome/staticPages/contacts/contacts.component";
import {IssueComponent} from "../main/issue/issue.component";

const routes: Routes = [
  {path: 'admin', component: AdminAuthComponent},
  {path: 'admin/user', component: UserTableComponent},
  {path: 'admin/employee', component: EmployeeTableComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: '', redirectTo: '/welcome', pathMatch: 'full'},
  {path: 'about', component: AboutComponent},
  {path: 'client', component: UserPersonalAreaComponent},
  {path: 'employee', component: EmployeePersonalAreaComponent},
  {path: 'client/pets', component: UserPetsComponent},
  {path: 'client/pets/:id', component: PetManagerComponent},
  {path: 'employee/dashboard', component: DashboardComponent},
  {path: 'employee/patients', component: EmployeePatientsComponent},
  {path: 'employee/patients/:id', component: PatientManagerComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'issue/:id', component: IssueComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
