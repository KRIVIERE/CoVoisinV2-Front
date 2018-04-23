import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index/index.component';
import { AccueilComponent } from './accueil/accueil.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { DonsComponent } from './categories/dons/dons.component';
import { CompetencesComponent } from './categories/competences/competences.component';
import { PretsComponent } from './categories/prets/prets.component';
import { ServicesComponent } from './categories/services/services.component';
import { ProfilComponent } from './profil/profil.component';
import { FormsComponent } from './forms/forms.component';


const routes: Routes = [
  { path: 'index', component: IndexComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'dons', component: DonsComponent },
  { path: 'competences', component: CompetencesComponent },
  { path: 'prets', component: PretsComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'profil/:id', component: ProfilComponent },
  { path: 'formulaires', component: FormsComponent },
  { path: '', redirectTo: '/index', pathMatch: 'full'}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

