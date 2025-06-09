import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Signup } from './pages/signup/signup';
import { MessagesPage } from './pages/messages-page/messages-page';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  { path: '/', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'signup', component: Signup },
  { path: 'messages', component: MessagesPage, canActivate: [authGuard]}
];
