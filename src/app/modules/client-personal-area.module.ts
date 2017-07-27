import {NgModule} from '@angular/core'
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {ClientPersonalAreaComponent} from "../main/private/client/client-personal-area.component";
import {ClientPetsComponent} from "../main/private/client/pets/client-pets.component";
import {NavigationComponent} from "../main/navigation/navigation.component";
import {NavigationModule} from "./navigation.module";
import {AnimalService} from "../services/animal.service";
import {PetManagerComponent} from "../main/private/client/pets/petManager/pet-manager.component";
import {PatientService} from "../services/patient.service";
import {ClientService} from "../services/client.service";

@NgModule({
  imports: [
    RouterModule,
    BrowserModule,
    FormsModule,
    NavigationModule
  ],
  declarations: [
    ClientPersonalAreaComponent,
    ClientPetsComponent,
    PetManagerComponent
  ],
  providers: [
    AnimalService,
    PatientService,
    ClientService
  ]
})

export class UserPersonalAreaModule {

}
