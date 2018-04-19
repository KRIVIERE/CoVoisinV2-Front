import { Component, OnInit } from '@angular/core';
import {RequestsService} from '../../requests.service';
import {OffersService} from '../../offers.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  public offers;
  public requests;
  filter: any = { category: 'Services' };
  order: string = 'date';

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
}
