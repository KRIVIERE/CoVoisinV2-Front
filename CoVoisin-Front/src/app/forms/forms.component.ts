import { Component, OnInit } from '@angular/core';
import { OffersService } from '../offers.service';
import { RequestsService } from '../requests.service';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})

export class FormsComponent implements OnInit {

  public offers;
  public requests;

  public title;
  public description;
  public category;
  public userId;
  public status;
  public pointsNumber;


  constructor(private offerService: OffersService, private requestService: RequestsService) { }

  ngOnInit() {
    this.getOffers();
    this.getRequests();
  }

  getOffers() {
    this.offerService.getOffers().subscribe(
      data => {this.offers = data},
      err => console.log(err),
      () => console.log('done loading offers')
    );
  }

  getRequests() {
    this.requestService.getRequests().subscribe(
      data => {this.requests = data},
      err => console.log(err),
      () => console.log('done loading requests')
    );
  }

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

  createOffer(title, category, description, userId, status, pointsNumber) {
    let new_offer = {
      title: title,
      category: category,
      description: description,
      userId: userId,
      pointsNumber: pointsNumber
    };

    this.offerService.createOffer(new_offer).subscribe(
      data => {
        this.getOffers();
        return true;
      },
      error => {
        console.log('Erreur create');
        return Observable.throw(error);
      });
  }

}
