import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {UsersService} from '../users.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  public users;

  public username;
  public password;
  public pointsNumber = 30;
  public email;
  public lastName;
  public firstName;
  public phoneNumber;
  public address;

  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe(
      data => {this.users = data},
      err => console.log(err),
      () => console.log('done loading users')
    );
  }

  createUser(username, password, pointsNumber, email, lastName, firstName, phoneNumber, address) {
    let new_user = {
      username: username,
      password: password,
      pointsNumber: pointsNumber,
      email: email,
      lastName: lastName,
      firstName: firstName,
      phoneNumber: phoneNumber,
      address: address
    };

    this.userService.createUser(new_user).subscribe(
      data => {
        this.getUsers();
        return true;
      },
      error => {
        console.log('Erreur create');
        return Observable.throw(error);
      });
  }
}
