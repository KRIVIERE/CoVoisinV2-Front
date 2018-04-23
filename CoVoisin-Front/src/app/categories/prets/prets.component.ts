import { Component, OnInit } from '@angular/core';
import {RequestsService} from '../../requests.service';
import {OffersService} from '../../offers.service';

@Component({
  selector: 'app-prets',
  templateUrl: './prets.component.html',
  styleUrls: ['./prets.component.css']
})
export class PretsComponent implements OnInit {
  public offers;
  public requests;
  filter1: any = { offerCategory: 'Prêts' };
  filter2: any = { requestCategory: 'Prêts' };
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
