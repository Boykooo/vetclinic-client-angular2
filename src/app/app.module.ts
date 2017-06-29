import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {WelcomeComponent} from "./main/welcome/welcome.component";
import {AdminPanelModule} from "./admin-panel.module";
import {HttpModule} from "@angular/http";
import {NavigationComponent} from "./main/navigation/navigation.component";
import {FormsModule} from "@angular/forms";
import {AboutComponent} from "./main/welcome/staticComponents/about.component";

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    NavigationComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    AdminPanelModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
