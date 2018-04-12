import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'app-game-table',
  templateUrl: './game-table.component.html',
  styleUrls: ['./game-table.component.less']
})
export class GameTableComponent implements OnInit {

  public userArrData: object;

  constructor(private http: Http) {}

  ngOnInit() {
    this.http.get('/registration')
      .subscribe((req) => {
        let json = req.json();
        this.userArrData = json[0];

        console.log('this.userArrData', this.userArrData);
      });
  }

}
