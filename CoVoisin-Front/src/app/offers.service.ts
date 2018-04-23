import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HTTPClientHelper } from '../HTTPClientHelper';

const HttpOptions = {
  headers: new HttpHeaders({'content-type': 'application/json'})//Sera utilisé par les requêtes qui envoient du json
};

const baseURL = HTTPClientHelper.baseURL;

@Injectable()
export class OffersService {

  constructor(private http: HttpClient) { }

  getOffers() {
    return this.http.get(`${baseURL}/api/offers`);
  }

  createOffer(offer) {
    let body = JSON.stringify(offer);
    return this.http.post(`${baseURL}/api/offers`, body, HttpOptions);
  }

}
