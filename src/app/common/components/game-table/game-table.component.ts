import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';

import priceArr from '../../../templateComponents/awards/awards';

@Component({
  selector: 'app-game-table',
  templateUrl: './game-table.component.html',
  styleUrls: ['./game-table.component.less']
})
export class GameTableComponent implements OnInit {

  public userArrData: object; // полученные данные по API пользователя
  public counter: number = 0;
  private root = false;
  public price = priceArr.price;
  private newUserData = {
    bottom: 0,
    tagIndex: 0,
    awards: [] // Записываем все в массив для рендеринга списка
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
      let bol = this,
        result = document.querySelector('.result');

      result.classList.remove('hide'); // Скрываем result
      $event.target.classList.add('button-active');
      bol.root = true;
      setTimeout(() => {
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
        liCarousel = mainCaousel.getElementsByTagName('li'),
        result = document.querySelector('.result');

    this.newUserData.bottom = 0; // чистим от результатов
    this.newUserData.tagIndex = 0; // чистим от результатов

    // Найдем самый нижний элемент в карусели
    for (let letter = 0; letter < liCarousel.length; letter++) {
      let newUserDataRender = 0;
      this.renderTags(newUserDataRender, mainCaousel, letter);
    }

    result.classList.add('hide'); // Открываем result
    this.reward(); // выбираем li(поле для награды)
    this.history(); // история операций
    //console.log('this.newUserData', this.newUserData);
  }

  /* Получаем index списка в котором находимся */
  renderTags(tagBottom, mainCarousel, counter) {
    let span = mainCarousel.getElementsByTagName('span')[counter],
      numberBottom = span.getBoundingClientRect().bottom;

    if (numberBottom > this.newUserData.bottom) {
      this.newUserData.bottom = numberBottom; // Самый нижний тег
      this.newUserData.tagIndex = counter + 1; // Получили пойманное поле в барабане
    }
  }

  /* Анимация для список наград, после получения числа */
  reward() {
    let listOfAwards = document.querySelector('.list-of-awards').getElementsByTagName('li'),
      li = listOfAwards[this.newUserData.tagIndex-1];

    // Удаляем выйгранные награды
    let removeClass = (tag) => {
      tag.classList.remove('active-awards');
    };

    // Находим не нужные классы
    for (let letter = 0; letter < listOfAwards.length; letter++) {
      removeClass(listOfAwards[letter]);
    }

    // Index награды
    let test = (tag) => {
      return tag.classList.add('active-awards');
    };

    test(li);
  }

  /* Запишем в объект результаты */
  history() {
    //this.userArrData.coints = Number(priceArr.price[this.newUserData.tagIndex]);
    this.newUserData.awards.push(priceArr.price[this.newUserData.tagIndex-1]);
  }

}
