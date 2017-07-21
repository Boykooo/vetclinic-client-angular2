import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from '../app.component';
import {AppRoutingModule} from "./app-routing.module";
import {WelcomeComponent} from "../main/welcome/welcome.component";
import {AdminPanelModule} from "./admin-panel.module";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {AboutComponent} from "../main/welcome/staticPages/about/about.component";
import {UserPersonalAreaModule} from "./client-personal-area.module";
import {NavigationModule} from "./navigation.module";
import {AuthService} from "../services/auth.service";
import {EmployeeModule} from "./employee-module";
import {ContactsComponent} from "../main/welcome/staticPages/contacts/contacts.component";

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AboutComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    AdminPanelModule,
    UserPersonalAreaModule,
    NavigationModule,
    EmployeeModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
