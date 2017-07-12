import {NgModule} from '@angular/core'
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {UserPersonalAreaComponent} from "../main/private/user/user-personal-area.component";
import {UserPetsComponent} from "../main/private/user/pets/user-pets.component";
import {NavigationComponent} from "../main/navigation/navigation.component";
import {NavigationModule} from "./navigation.module";
import {AnimalService} from "../services/animal.service";

@NgModule({
  imports: [
    RouterModule,
    BrowserModule,
    FormsModule,
    NavigationModule
  ],
  declarations: [
    UserPersonalAreaComponent,
    UserPetsComponent,
  ],
  providers: [AnimalService]
})

export class UserPersonalAreaModule {

}
