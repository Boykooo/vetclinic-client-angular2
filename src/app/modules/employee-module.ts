
import {NgModule} from '@angular/core'
import {NavigationModule} from "./navigation.module";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {EmployeePersonalAreaComponent} from "../main/private/employee/employee-personal-area.component";

@NgModule({
  imports: [
    RouterModule,
    BrowserModule,
    FormsModule,
    NavigationModule
  ],
  declarations: [
    EmployeePersonalAreaComponent
  ],
  providers: [

  ]
})

export class EmployeeModule{

}
