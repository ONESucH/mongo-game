/* Модули */
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module'; // Роутинг
import {FormsModule} from '@angular/forms'; // Форма
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http'; // Модуль для работы с mongo - http

/* Компоненты */
import {MainComponent} from './common/components/main/main.component';
import {AppComponent} from './app.component';
import {RegistrationComponent} from './common/components/registration/registration.component';
import {SignInComponent} from './common/components/sign-in/sign-in.component';
import {NotFoundComponent} from './common/components/not-found/not-found.component';
import {GameTableComponent} from './common/components/game-table/game-table.component';
import {HeaderComponent} from './common/components/header/header.component';
import {FooterComponent} from './common/components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    SignInComponent,
    GameTableComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
