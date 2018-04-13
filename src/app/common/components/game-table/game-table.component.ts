import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'app-game-table',
  templateUrl: './game-table.component.html',
  styleUrls: ['./game-table.component.less']
})
export class GameTableComponent implements OnInit {

  public userArrData: object;
  public counter = 0;

  constructor(private http: Http) {}

  ngOnInit() {
    this.http.get('/registration')
      .subscribe((req) => {
        let json = req.json();
        this.userArrData = json[0];

        console.log('this.userArrData', this.userArrData);
      });
  }

  randomNumber() {
    this.counter += Math.floor(Math.random() * (1080 - 360 + 1) + 1); // max/min(360deg);
    return this.counter; // Количество оборотов в карусели
  }

}
