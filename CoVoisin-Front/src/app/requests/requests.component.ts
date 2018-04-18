import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {RequestsService} from '../requests.service';
//Importer les classes utiles


@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
//Définir le sélecteur qui permettra d'injecter les composants (classes, vue et styles)

export class RequestsComponent implements OnInit {
  //Permettre l'exportation des classes sur appel du sélecteur à l'initialisation
  //Définir la classe avec les éléments ci-dessous


  //Définir la classe et ses propriétés
  public requests;

  public title;
  public date;
  public description;
  public userId;
  public status;
  public pointsNumber;

  //Constructeur qui permet d'instancier notre classe
  constructor(private requestService: RequestsService) { }

  //Initialiser le composant
  ngOnInit() {

    this.getRequests();

  }

  //Définir la fonction qui indique le bon déroulement de l'instanciation ou une erreur en instanciant getRequests() en inscrivant la méthode getRequests du service correspondant de l'objet ou afin
  getRequests() {
    this.requestService.getRequests().subscribe(
      data => {this.requests = data},
      err => console.log(err),
      () => console.log('done loading users')
    );
  }

  //Définition de la fonction qui crée une instance de createRequest avec ses propriétés
  createRequest(title, date, description, userId, status, pointsNumber) {
    let new_request = {
      title: title,
      date: date,
      description: description,
      userId: userId,
      status: status,
      pointsNumber: pointsNumber
    };

    this.requestService.createRequest(new_request).subscribe(
      data => {
        this.getRequests();
        return true;
      },
      error => {
        console.log('Erreur create');
        return Observable.throw(error);
      });
  }

}
