import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { RequestsService } from '../requests.service';
import { Observable } from 'rxjs/Observable';
/*import { Observable } from 'rxjs/symbol/observable';*/

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})
export class TestsComponent implements OnInit {

  public requests;
  public current_request;

  public title;
  public date;
  public description;
  public userId;
  public status;
  public pointsNumber;

  constructor(private requestService: RequestsService) { }

  ngOnInit() {
    this.getRequests();
  }

  getRequests() {
   this.requestService.getRequests().subscribe(
     data => {this.requests = data},
     err => console.log(err),
     () => console.log('done loading users')
   );
  }

  getRequest(id) {
    this.requestService.getRequest(id).subscribe(
      data => {this.current_request = data},
      err => console.log(err),
      () => console.log('done loading user : ' + this.current_request.title)
    );
  }

  createRequest(title, date, description, userId, pointsNumber) {
    let new_request = {
      title: title,
      date: date,
      description: description,
      userId: userId,
      status: status,
      pointsNumber: pointsNumber
    };

    this.requestService.createRequest(new_request).subscribe(
      data => {
        this.getRequests();
        return true;
      },
      error => {
        console.log('Erreur create');
        return Observable.throw(error);
      });
  }

  updateRequest(request) {
    this.requestService.updateRequest(request).subscribe(
      data => {
        this.getRequests();
        return true;
      },
      error => {
        console.log('Erreur update');
        return Observable.throw(error);
      }
    );
  }

  deleteRequest(request) {
    this.requestService.deleteRequest(request).subscribe(
      data => {
        this.getRequests();
        return true;
      },
      error => {
        console.log('Erreur delete');
        return Observable.throw(error);
      }
    );
  }
}
