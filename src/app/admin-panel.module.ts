import {NgModule} from '@angular/core';
import {AdminPanelNavigationComponent} from "./admin/admin-panel-navigation.component";
import {UserTableComponent} from "./admin/userTable/user-table.component";
import {EmployeeTableComponent} from "./admin/employeeTable/employee-table.component";
import {RouterModule} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
  imports: [
    RouterModule,
    BrowserModule
  ],
  declarations: [
    EmployeeTableComponent,
    UserTableComponent,
    AdminPanelNavigationComponent
  ]
  // exports: [
  //   EmployeeTableComponent,
  //   UserTableComponent,
  //   AdminPanelNavigationComponent
  // ]
})
export class AdminPanelModule{

}
