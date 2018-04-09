import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import ModalMessage from '../../../templateComponents/modalMessage/modalMessage'; // Модальное окно

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class SignInComponent implements OnInit {

  private pass: any;
  private login: any;

  constructor(private http: HttpClient) {}

  /* Проверяем на зарегистрированного пользователя */
  ngOnInit() {}

  /* Вход в систему */
  signInFormData(signInData) {

    if (!signInData.valid) {
      ModalMessage.modal('Форма не валидна');
      return false;
    } else {
      this.pass = signInData.value.pass;
      this.login = signInData.value.nik_name;

      this.http.get('/registration').subscribe((req) => {
        for (let key in req) {
          if (req[key].pass === this.pass && req[key].nik_name === this.login) {
            ModalMessage.modal('Вошли');
            window.location.href = '/game-table';
          } else {
            ModalMessage.modal('Не верные данные');
          }
        }
      });

      signInData.reset(); // чистим форму
    }
  }
}
