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
  private root = false;
  private bottomTag = {
    bottom: 0,
    tagIndex: 0
  };

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
      this.counter += Math.floor(Math.random() * (1440 - 720)); // max/min;
      return this.counter; // Количество оборотов в карусели
    }
  }

  /* Запишем результат в окно результата */
  getNumberOfChars() {
    let mainCaousel = document.querySelector('.carousel-block'),
        liCarousel = mainCaousel.getElementsByTagName('li');

    this.bottomTag.bottom = 0; // чистим от результатов
    this.bottomTag.tagIndex = 0; // чистим от результатов

    // Найдем самый нижний элемент в карусели
    for (let letter = 0; letter < liCarousel.length; letter++) {
      let bottomTagRender = 0;
      this.renderTags(bottomTagRender, mainCaousel, letter);
    }

    console.log('this.bottomTag', this.bottomTag);
  }

  /* Получаем index списка в котором находимся */
  renderTags(tagBottom, mainCarousel, counter) {
    let span = mainCarousel.getElementsByTagName('span')[counter],
      numberBottom = span.getBoundingClientRect().bottom;

    if (numberBottom > this.bottomTag.bottom) {
      this.bottomTag.bottom = numberBottom; // Самый нижний тег
      this.bottomTag.tagIndex = counter + 1; // Получили пойманное поле в барабане
    }

  }

}
