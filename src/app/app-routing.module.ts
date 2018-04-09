import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {MainComponent} from './common/components/main/main.component';
import {SignInComponent} from './common/components/sign-in/sign-in.component';
import {RegistrationComponent} from './common/components/registration/registration.component';
import {GameTableComponent} from './common/components/game-table/game-table.component';
import {NotFoundComponent} from './common/components/not-found/not-found.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'sign-in', component: SignInComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'game-table', component: GameTableComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
