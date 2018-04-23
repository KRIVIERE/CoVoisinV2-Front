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

  public requestTitle;
  public requestCategory;
  public requestDescription;
  public requestUserId;
  public requestStatus;
  public requestPointsNumber;
  public offerTitle;
  public offerCategory;
  public offerDescription;
  public offerUserId;
  public offerStatus;
  public offerPointsNumber;


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

  createRequest(requestTitle, requestCategory, requestDescription, requestUserId, requestStatus, requestPointsNumber) {
    let new_request = {
      requestTitle: requestTitle,
      requestCategory: requestCategory,
      requestDescription: requestDescription,
      requestUserId: requestUserId,
      requestStatus: requestStatus,
      requestPointsNumber: requestPointsNumber
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

  createOffer(offerTitle, offerCategory, offerDescription, offerUserId, offerStatus, offerPointsNumber) {
    let new_offer = {
      offerTitle: offerTitle,
      offerCategory: offerCategory,
      offerDescription: offerDescription,
      offerUserId: offerUserId,
      offerStatus: offerStatus,
      offerPointsNumber: offerPointsNumber
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
