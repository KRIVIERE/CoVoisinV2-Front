import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ConnexionComponent } from './index/connexion/connexion.component';
import { InformationsComponent } from './index/informations/informations.component';


@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    InformationsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
