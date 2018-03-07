import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.less']
})

@Injectable()
export class RegistrationComponent implements OnInit {

  registration: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    //this.http.get('/registration').subscribe(data => {
    //  this.books = data;
    //  console.log('%c ' + '----------->>>>>>>>>>>>', 'background:orange;border-radius:10px;color:#fff;text-shadow: 0 0 5px red;padding-right:5px;', this.books);
    //});
  }

  /* Регистрация */
  registerUsers(data, infoPanel) {

    /* Проверяем на валидность форму */
    if (!data.valid) {
      console.log('%c ' + 'Форма не валидна', 'background:red;border-radius:10px;color:#fff;text-shadow: 0 0 5px red;padding-right:5px;');
      return false;
    } else  if (data.value.pass === data.value.confirm_pass) {

      /* Запишем данные пользователя в LocalStorage */
      localStorage.setItem('nik_name', data.value.nik_name);

      this.http.post('/registration', data.value).subscribe(data => {
        console.log('%c ' + 'POST Result', 'background:green;border-radius:10px;color:#fff;text-shadow: 0 0 5px red;padding-right:5px;', data);
      });

      /* Чистим форму от заполненных данных */
      data.reset();

      /* Уведомление о том что вы зарегистрировались */
      infoPanel.classList.add('panel-show');
      infoPanel.innerText = 'Данные успешно сохранены';

      setTimeout(function () {
        infoPanel.classList.remove('panel-show');
        document.location.pathname = '';
      }, 2000);

    } else {
      /* Уведомление о том что вы зарегистрировались */
      infoPanel.classList.add('panel-show');
      infoPanel.innerText = 'Заполните форму';

      setTimeout(function () {
        infoPanel.classList.remove('panel-show');
      }, 2000);
      console.log('%c ' + 'Пароли не совпадают / форма пуста', 'background:orange;border-radius:10px;color:#fff;text-shadow: 0 0 5px red;padding-right:5px;');
      return false;
    }

  }

}
