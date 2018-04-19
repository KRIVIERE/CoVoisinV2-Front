import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {observable} from 'rxjs/symbol/observable';
import { OffersService } from '../../offers.service';
import { RequestsService } from '../../requests.service';

@Component({
  selector: 'app-competences',
  templateUrl: './competences.component.html',
  styleUrls: ['./competences.component.css']
})
export class CompetencesComponent implements OnInit {
  public offers;
  public requests;
  filter: any = { category: 'Compétences' };
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
