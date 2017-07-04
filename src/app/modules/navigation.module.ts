
import {NgModule} from '@angular/core'
import {NavigationComponent} from "../main/navigation/navigation.component";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";

@NgModule({
  imports:[
    RouterModule,
    BrowserModule,
    FormsModule
  ],
  declarations:[
    NavigationComponent
  ],
  exports:[
    NavigationComponent
  ]
})

export class NavigationModule{

}
