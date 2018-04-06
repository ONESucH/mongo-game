import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.less']
})
export class SignInComponent implements OnInit {

  private pass: any;
  private login: any;

  constructor(private http: HttpClient) {}

  /* Проверяем на зарегистрированного пользователя */
  ngOnInit() {

  }

  signInFormData(signInData) {
    if (!signInData.valid) {
      console.log('Форма не валидна');
      return false;
    } else {
      console.log('signInData.value', signInData.value);

      this.pass = signInData.value.pass;
      this.login = signInData.value.nik_name;

      this.http.get('/registration').subscribe((req) => {
        // signInData.value.nik_name
        // signInData.value.pass
        console.log('req', req);
        let seccessPass = this.pass.indexOf(req) !== -1;
        let seccessLogin = this.login.indexOf(req) !== -1;
        console.log('seccessPass', seccessPass);
        console.log('seccessLogin', seccessLogin);


        //console.log('user', user);
      });


      signInData.reset(); // чисти форму
    }
  }
}
