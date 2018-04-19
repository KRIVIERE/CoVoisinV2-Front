import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {observable} from 'rxjs/symbol/observable';
import { OffersService } from '../../offers.service';
import { RequestsService } from '../../requests.service';

@Component({
  selector: 'app-dons',
  templateUrl: './dons.component.html',
  styleUrls: ['./dons.component.css']
})
export class DonsComponent implements OnInit {
  public offers;
  public requests;
  filter: any = { category: 'Dons' };

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
