import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { HTTPClientHelper } from '../HTTPClientHelper';

const HttpOptions = {
  headers: new HttpHeaders({'content-type': 'application/json'})//Sera utilisé par les requêtes qui envoient du json
}

const baseURL = HTTPClientHelper.baseURL;

@Injectable()
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(`${baseURL}/api/users`);
  }

  getUser(id) {
    return this.http.get(`${baseURL}/api/users/` + id);
  }

  deleteUser(user) {
    return this.http.delete(`${baseURL}/api/users/` + user.id);
  }

  createUser(user) {
    let body = JSON.stringify(user);
    return this.http.post(`${baseURL}/api/users`, body, HttpOptions);
  }

  updateUser(user) {
    let body = JSON.stringify(user);
    return this.http.post(`${baseURL}/api/users/` + user.id, body, HttpOptions);
  }

}
