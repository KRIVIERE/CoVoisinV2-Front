import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationLateraleComponent } from './navigation-laterale/navigation-laterale.component';
import { ConnexionComponent } from './index/connexion/connexion.component';
import { InformationsComponent } from './index/informations/informations.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { IndexComponent } from './index/index/index.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {UsersService} from './users.service';
import { TestsComponent } from './tests/tests.component';
import { RequestsComponent } from './requests/requests.component';
import {RequestsService} from "./requests.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavigationLateraleComponent,
    ConnexionComponent,
    InformationsComponent,
    InscriptionComponent,
    IndexComponent,
    TestsComponent,
    RequestsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UsersService, RequestsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
