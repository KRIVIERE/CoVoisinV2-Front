import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RequestsService } from '../requests.service';
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
  public description;
  public category;
  public userId;
  public status;
  public pointsNumber;

  //Constructeur qui permet d'instancier notre classe
  constructor(private requestService: RequestsService) {
  }

  //Initialiser le composant
  ngOnInit() {

    this.getRequests();
  }

  //Retourner toutes les instances de Requests ou afficher un message d'erreur
  getRequests() {
    this.requestService.getRequests().subscribe(
      data => {
        this.requests = data
      },
      err => console.log(err),
      () => console.log('done loading requests')
    );
  }

  /*Retourner toute l'instances de Requests correspondant à l'id ou afficher un message d'erreur
  getRequest(id) {
    this.requestService.getRequest(id).subscribe(
      data => {this.request = data},
      err => console.log(err),
      () => console.log('done loading user : ' + this.request.title)
    );
  }*/


  //Créer une instance de Requests ou afficher un message d'erreur
  createRequest(title, description, category, userId, status, pointsNumber) {
    let new_request = {
      title: title,
      description: description,
      category: category,
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

/*  updateRequest(request) {
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
    }*/
}
