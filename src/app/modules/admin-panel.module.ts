import {NgModule} from '@angular/core';
import {AdminPanelNavigationComponent} from "../admin/adminNavigation/admin-panel-navigation.component";
import {UserTableComponent} from "../admin/userTable/user-table.component";
import {EmployeeTableComponent} from "../admin/employeeTable/employee-table.component";
import {RouterModule} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {AdminAuthComponent} from "../admin/admin-auth.component";
import {AuthService} from "../services/auth.service";

@NgModule({
  imports: [
    RouterModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    EmployeeTableComponent,
    UserTableComponent,
    AdminPanelNavigationComponent,
    AdminAuthComponent
  ],
  providers: [AuthService]
})
export class AdminPanelModule {

}
