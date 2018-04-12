import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';

import AppNews from '../../../templateComponents/app-news/app-news.js';

const appNewsArr = AppNews.arrNews();

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  public userArrData: object;
  public getNew = appNewsArr[Math.floor(Math.random() * (appNewsArr.length + 1 - 0))];

  constructor(private http: Http) {}

  ngOnInit() {
    this.http.get('/registration')
      .subscribe((req) => {
        let json = req.json();
        this.userArrData = json[0];
      });
  }
}
