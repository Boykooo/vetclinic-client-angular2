import {NgModule} from '@angular/core';
import {AdminPanelNavigationComponent} from "./admin/admin-panel-navigation.component";
import {UserTableComponent} from "./admin/userTable/user-table.component";
import {EmployeeTableComponent} from "./admin/employeeTable/employee-table.component";
import {RouterModule} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";

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
    AdminPanelNavigationComponent
  ],
  providers: []
})
export class AdminPanelModule {

}