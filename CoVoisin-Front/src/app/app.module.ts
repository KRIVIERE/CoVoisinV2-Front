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
import { AccueilComponent } from './accueil/accueil.component';
import { OffersService } from './offers.service';
import { RequestsService } from './requests.service';
import { DonsComponent } from './categories/dons/dons.component';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { CompetencesComponent } from './categories/competences/competences.component';
import { PretsComponent } from './categories/prets/prets.component';
import { ServicesComponent } from './categories/services/services.component';
import { OrderModule } from 'ngx-order-pipe';

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
    AccueilComponent,
    DonsComponent,
    CompetencesComponent,
    PretsComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    FilterPipeModule,
    OrderModule
  ],
  providers: [
    UsersService,
    RequestsService,
    OffersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
