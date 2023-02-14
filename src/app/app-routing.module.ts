import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  AngularFireAuthGuard,
  redirectLoggedInTo,
  redirectUnauthorizedTo
} from '@angular/fire/compat/auth-guard'
import { LoginComponent } from './modules/auth/login/login.component';
import { CardsListComponent } from './modules/organisms/cards-list/cards-list.component';
import { HomeComponent } from './modules/pages/home/home.component';
import { MyCardsComponent } from './modules/pages/my-cards/my-cards.component';
import { MoneyComponent } from './modules/pages/money/money.component';

const redirectUnauthorizedToLogin = () =>redirectUnauthorizedTo(['']);
const redirectLoggedInToDashboard = () => redirectLoggedInTo(['home']);


const routes: Routes = [
  {
    path:'',
    component:LoginComponent,
    canActivate:[AngularFireAuthGuard],
    data:{autoGuardPipe:redirectLoggedInToDashboard}
  },
  {
    path:'home',
    component:HomeComponent,
    canActivate:[AngularFireAuthGuard],
    data:{autoGuardPipe:redirectUnauthorizedToLogin}
  },
  {
    path:'my-cards',
    component:MyCardsComponent,
    canActivate:[AngularFireAuthGuard],
    data:{autoGuardPipe:redirectUnauthorizedToLogin}
  },
  {
    path:'money',
    component:MoneyComponent,
    canActivate:[AngularFireAuthGuard],
    data:{autoGuardPipe:redirectUnauthorizedToLogin}
  },
  {
    path:'**',
    component:LoginComponent,
    canActivate:[AngularFireAuthGuard],
    data:{autoGuardPipe:redirectUnauthorizedToLogin}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
