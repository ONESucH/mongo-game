import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';

import AppNews from '../../../templateComponents/app-news/app-news.js';
import {GameTableComponent} from '../game-table/game-table.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  private appNewsArr = AppNews.arrNews();
  public userArrData: object;
  public getNew = this.appNewsArr[Math.floor(Math.random() * (this.appNewsArr.length + 1 - 0))];
  private timer = new Date();

  constructor(private http: Http) {}

  ngOnInit() {
    /* Делаем запрос при загрузке документа */
    this.http.get('/registration')
      .subscribe((req) => {
        let json = req.json();
        this.userArrData = json[0];
      });

    /* Запрос по событию */
    GameTableComponent.updateButton.subscribe(() => {
      this.http.get('/registration')
        .subscribe((req) => {
          let json = req.json();
          this.userArrData = json[0];
        });
    });
  }
}
