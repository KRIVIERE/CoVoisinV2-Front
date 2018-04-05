import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavigationLateraleComponent } from './navigation-laterale/navigation-laterale.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationLateraleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
