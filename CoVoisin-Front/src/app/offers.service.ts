import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HTTPClientHelper } from '../HTTPClientHelper';

const HttpOptions = {
  headers: new HttpHeaders({'content-type': 'application/json'})//Sera utilisé par les requêtes qui envoient du json
}

const baseURL = HTTPClientHelper.baseURL;

@Injectable()
export class OffersService {

  constructor(private http: HttpClient) { }

  getOffers() {
    return this.http.get(`${baseURL}/api/offers`);
  }

/*  getOffer(id) {
    return this.http.get(`${baseURL}/api/offers/` + id);
  }

  deleteOffer(offer) {
    return this.http.delete(`${baseURL}/api/offers/` + offer.id);
  }*/

  createOffer(offer) {
    let body = JSON.stringify(offer);
    return this.http.post(`${baseURL}/api/offers`, body, HttpOptions);
  }

/*  updateUser(user) {
    let body = JSON.stringify(user);
    return this.http.put(`${baseURL}/api/users/` + user.id, body, HttpOptions);
  }*/
}
