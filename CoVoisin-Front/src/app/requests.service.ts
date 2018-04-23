import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HTTPClientHelper } from '../HTTPClientHelper';

const HttpOptions = {
  headers: new HttpHeaders({'content-type': 'application/json'})//Sera utilisé par les requêtes qui envoient du json
};

const baseURL = HTTPClientHelper.baseURL;

@Injectable()
export class RequestsService {

  constructor(private http: HttpClient) { }

  getRequests() {
    return this.http.get(`${baseURL}/api/requests`);
  }

  createRequest(request) {
    let body = JSON.stringify(request);
    return this.http.post(`${baseURL}/api/requests`, body, HttpOptions);
  }
}
