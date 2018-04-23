import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {OffersService} from "../offers.service";

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})

export class OffersComponent implements OnInit {
  public offers;

  public title;
  public category;
  public description;
  public userId;
  public status;
  public pointsNumber;

  constructor(private offerService: OffersService) { }

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
