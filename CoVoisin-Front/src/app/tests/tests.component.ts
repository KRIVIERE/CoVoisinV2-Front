import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RequestsService } from '../requests.service';
import { OffersService } from '../offers.service';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})
export class TestsComponent implements OnInit {

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
      title: requestTitle,
      description: requestCategory,
      category: requestDescription,
      userId: requestUserId,
      status: requestStatus,
      pointsNumber: requestPointsNumber
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
      offer: offerTitle,
      category: offerCategory,
      description: offerDescription,
      userId: offerUserId,
      status: offerStatus,
      pointsNumber: offerPointsNumber
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
