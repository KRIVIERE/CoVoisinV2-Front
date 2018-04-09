import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormulaireConnexionComponent } from './index/formulaire-connexion/formulaire-connexion.component';


@NgModule({
  declarations: [
    AppComponent,
    FormulaireConnexionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
