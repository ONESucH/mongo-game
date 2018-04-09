import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  constructor(private http: Http) {
  }

  ngOnInit() {
    this.http.get('/registration')
      .subscribe((req) => {
        let json = req.json(),
          user = json[0];

        console.log('json', json);
        console.log('user', user);
      })
  }
}
