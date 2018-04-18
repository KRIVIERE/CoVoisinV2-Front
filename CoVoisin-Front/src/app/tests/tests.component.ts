import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Observable } from 'rxjs/Observable';
import {observable} from 'rxjs/symbol/observable';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})
export class TestsComponent implements OnInit {

  public users;
  public current_user;

  public username;
  public password;
  public pointsNumber;
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

  getUser(id) {
    this.userService.getUser(id).subscribe(
      data => {this.current_user = data},
      err => console.log(err),
      () => console.log('done loading user : ' + this.current_user.username)
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

  updateUser(user) {
    this.userService.updateUser(user).subscribe(
      data => {
        this.getUsers();
        return true;
      },
      error => {
        console.log('Erreur update');
        return Observable.throw(error);
      }
    );
  }

  deleteUser(user) {
    this.userService.deleteUser(user).subscribe(
      data => {
        this.getUsers();
        return true;
      },
      error => {
        console.log('Erreur delete');
        return Observable.throw(error);
      }
    );
  }
}
