import { Component, OnInit } from '@angular/core';
import { OffersService } from '../offers.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})

export class TestsComponent implements OnInit {

  public offers;

  public title;
  public category;
  public description;
  public userId;
  public status;
  public pointsNumber;

  constructor(private offerService:OffersService) { }

  ngOnInit() {
    this.getOffers();
  }

  getOffers() {
   this.offerService.getOffers().subscribe(
     data => {this.offers = data},
     err => console.log(err),
     () => console.log('done loading offers')
   );
  }

/* getRequest(id) {
    this.requestService.getRequest(id).subscribe(
      data => {this.request = data},
      err => console.log(err),
      () => console.log('done loading user : ' + this.request.title)
    );
  }*/

  createOffer(title, category, description, userId, status, pointsNumber) {
    let new_offer = {
      title: title,
      category: category,
      description: description,
      userId: userId,
      status: status,
      pointsNumber: pointsNumber
    };

    this.offerService.createOffer(new_offer).subscribe(
      data => {
        this.createOffer(title, category, description, userId, status, pointsNumber);
        return true;
      },
      error => {
        console.log('Erreur create');
        return Observable.throw(error);
      });
  }

/* updateRequest(request) {
    this.requestService.getRequests().subscribe(
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
