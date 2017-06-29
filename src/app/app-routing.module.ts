import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {UserTableComponent} from "./admin/userTable/user-table.component";
import {WelcomeComponent} from "./main/welcome/welcome.component";
import {EmployeeTableComponent} from "./admin/employeeTable/employee-table.component";
import {AboutComponent} from "./main/welcome/staticComponents/about.component";

const routes: Routes = [
  {path: 'admin', redirectTo: 'admin/user', pathMatch: 'full'},
  {path: 'admin/user', component: UserTableComponent},
  {path: 'admin/employee', component: EmployeeTableComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: '', redirectTo: '/welcome', pathMatch: 'full'},
  {path: 'about', component: AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{

}
