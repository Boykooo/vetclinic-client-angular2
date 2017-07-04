import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {UserTableComponent} from "./admin/userTable/user-table.component";
import {WelcomeComponent} from "./main/welcome/welcome.component";
import {EmployeeTableComponent} from "./admin/employeeTable/employee-table.component";
import {AboutComponent} from "./main/welcome/staticPages/about.component";
import {ContactsComponent} from "./main/contacts/contacts.component";
import {AdminAuthComponent} from "./admin/admin-auth.component";

const routes: Routes = [
  {path: 'admin', component: AdminAuthComponent},
  {path: 'admin/user', component: UserTableComponent},
  {path: 'admin/employee', component: EmployeeTableComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: '', redirectTo: '/welcome', pathMatch: 'full'},
  {path: 'about', component: AboutComponent},
  {path: 'contacts', component: ContactsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{

}
