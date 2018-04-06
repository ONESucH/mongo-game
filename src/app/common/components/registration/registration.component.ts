import {Component, Injectable, ViewEncapsulation} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.less'],
  encapsulation: ViewEncapsulation.None
})

@Injectable()
export class RegistrationComponent {

  registration: any;

  constructor(private http: HttpClient) {
  }

  /* Регистрация */
  registerUsers(data) {
    /* окно уведомления */
    let content = document.querySelector('.app-registartion'),
      message = document.createElement('div');

    message.classList.add('message-window');

    /* Проверяем на валидность форму */
    if (!data.valid) {

      /* Форма пуста или не валидна */
      message.innerText = 'Форма пуста или не валидна '; // сообщение

      setTimeout(function () {
        message.style.opacity = '0';
        content.removeChild(message);
      }, 5000);

      content.appendChild(message);

      return false;

    } else if (data.value.pass !== data.value.confirm_pass) {

      message.innerText = 'Пароли не совпадают'; // сообщение

      setTimeout(function () {
        message.style.opacity = '0';
        content.removeChild(message);
      }, 5000);

      content.appendChild(message);
    } else {

      /* Запишем данные пользователя в LocalStorage */
      this.http.post('/registration', data.value).subscribe(() => {

        message.innerText = 'Вы зарегистировались'; // сообщение

        setTimeout(function () {
          message.style.opacity = '0';
          content.removeChild(message);
        }, 5000);

        content.appendChild(message);
      });

      /* Чистим форму регистрации */
      data.reset();

    }
  }

}
