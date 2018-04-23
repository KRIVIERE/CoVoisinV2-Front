import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { Observable } from 'rxjs/Observable';
import { HTTPClientHelper } from '../HTTPClientHelper';

const HttpOptions = {
  headers: new HttpHeaders({'content-type': 'application/json'})//Sera utilisé par les requêtes qui envoient du json
}

const baseURL = HTTPClientHelper.baseURL;

@Injectable()
export class RequestsService {

  constructor(private http: HttpClient) { }

  getRequests() {
    return this.http.get(`${baseURL}/api/requests`);
  }

/*  getRequest(id) {
    return this.http.get(`${baseURL}/api/requests/` + id);
  }*/

  createRequest(request) {
    let body = JSON.stringify(request);
    return this.http.post(`${baseURL}/api/requests`, body, HttpOptions);
  }

/*  deleteRequest(request) {
    return this.http.delete(`${baseURL}/api/requests/` + request.id);
  }

  updateRequest(request) {
    let body = JSON.stringify(request);
    return this.http.put(`${baseURL}/api/requests/` + request.id, body, HttpOptions);
  }*/

}
