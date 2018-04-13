import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'app-game-table',
  templateUrl: './game-table.component.html',
  styleUrls: ['./game-table.component.less']
})
export class GameTableComponent implements OnInit {

  public userArrData: object;
  public counter: number = 0;
  private winCounter: number = 0;
  private root = false;

  constructor(private http: Http) {}

  ngOnInit() {
    this.http.get('/registration')
      .subscribe((req) => {
        let json = req.json();
        this.userArrData = json[0];

        console.log('this.userArrData', this.userArrData);
      });
  }

  /* Рандомное число */
  randomNumber($event) {
    if (!this.root) {
      $event.target.classList.add('button-active');
      let bol = this;
      bol.root = true;
      setTimeout(function () {
        bol.root = false;
        bol.getNumberOfChars();
        $event.target.classList.remove('button-active');
      }, 10000);
      this.counter += Math.floor(Math.random() * (360 - 0) + 1); // max/min(720deg);
      console.log('this.counter', this.counter);
      this.winCounter = Math.floor(this.counter / (360 / 8 + 5) / 2);
      console.log('this.winCounter', this.winCounter);
      return this.counter; // Количество оборотов в карусели
    }
  }

  /* Запишем результат в окно результата */
  getNumberOfChars() {
    let pointer = document.querySelector('.pointer');

    console.log('pointer.nodeValue', pointer.nodeValue);
    console.log('pointer.nodeType', pointer.nodeType);
    console.log('pointer.nodeType', pointer.tagName);
  }

}
