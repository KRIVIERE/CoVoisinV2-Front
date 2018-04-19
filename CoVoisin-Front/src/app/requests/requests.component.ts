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
  public request;

  public id;
  public title;
  public description;
  public userId;
  public status;
  public pointsNumber;

  //Constructeur qui permet d'instancier notre classe
  constructor(private requestService: RequestsService) { }

  //Initialiser le composant
  ngOnInit() {

    this.getRequests();
    this.getRequest(this.id);
    this.createRequest(this.title, this.description, this.userId, this.status, this.pointsNumber);
    this.updateRequest(this.request);
    this.deleteRequest(this.request);

  }

  //Retourner toutes les instances de Requests ou afficher un message d'erreur
  getRequests() {
    this.requestService.getRequests().subscribe(
      data => {this.requests = data},
      err => console.log(err),
      () => console.log('done loading users')
    );
  }

  //Retourner toute l'instances de Requests correspondant à l'id ou afficher un message d'erreur
  getRequest(id) {
    this.requestService.getRequest(id).subscribe(
      data => {this.request = data},
      err => console.log(err),
      () => console.log('done loading user : ' + this.request.title)
    );
  }

  //Créer une instance de Requests ou afficher un message d'erreur
  createRequest(title, description, userId, status, pointsNumber) {
    let new_request = {
      title: title,
      description: description,
      userId: userId,
      status: status,
      pointsNumber: pointsNumber
    };

    this.requestService.createRequest(new_request).subscribe(
      data => {
        this.createRequest(title, description, userId, status, pointsNumber);
        return true;
      },
      error => {
        console.log('Erreur create');
        return Observable.throw(error);
      });
  }

  updateRequest(request) {
    this.requestService.updateRequest(request).subscribe(
      data => {
        this.updateRequest(request);
        return true;
      },
      error => {
        console.log('Erreur update');
        return Observable.throw(error);
      }
    );
  }

  deleteRequest(request) {
    this.requestService.deleteRequest(request).subscribe(
      data => {
        this.deleteRequest(request);
        return true;
      },
      error => {
        console.log('Erreur delete');
        return Observable.throw(error);
      }
    );
  }
}
