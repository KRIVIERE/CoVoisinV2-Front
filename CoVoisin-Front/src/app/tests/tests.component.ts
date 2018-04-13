import { Component, OnInit } from '@angular/core';
import { UsersService} from "../users.service";
import { Observable} from "rxjs/Observable";

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})
export class TestsComponent implements OnInit {

  public users;

  constructor(private userService:UsersService) { }

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





}
