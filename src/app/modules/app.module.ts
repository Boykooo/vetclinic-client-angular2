import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from '../app.component';
import {AppRoutingModule} from "./app-routing.module";
import {WelcomeComponent} from "../main/welcome/welcome.component";
import {AdminPanelModule} from "./admin-panel.module";
import {HttpModule} from "@angular/http";
import {NavigationComponent} from "../main/navigation/navigation.component";
import {FormsModule} from "@angular/forms";
import {AboutComponent} from "../main/welcome/staticPages/about.component";
import {ContactsComponent} from "../main/contacts/contacts.component";
import {UserPersonalAreaModule} from "./user-personal-area.module";
import {NavigationModule} from "./navigation.module";
import {AuthService} from "../services/auth.service";

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
    NavigationModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
