import {Component, Injectable, ViewEncapsulation} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import ModalMessage from '../../../templateComponents/modalMessage/modalMessage'; // Модальное окно

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.less'],
  encapsulation: ViewEncapsulation.None
})

@Injectable()
export class RegistrationComponent {

  registration: any;

  constructor(private http: HttpClient) {}

  /* Регистрация */
  registerUsers(data) {

    /* Проверяем на валидность форму */
    if (!data.valid) {
      /* Форма пуста или не валидна */
      ModalMessage.modal('Форма пуста или не валидна ');
      return false;
    } else if (data.value.pass !== data.value.confirm_pass) {
      ModalMessage.modal('Пароли не совпадают');
    } else {
      /* Запишем данные пользователя в LocalStorage */
      this.http.post('/registration', data.value).subscribe(() => {
        ModalMessage.modal('Вы зарегистировались');
      });

      /* Чистим форму регистрации */
      data.reset();

    }
  }

}
