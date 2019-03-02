import { Routes } from '@angular/router';
import { LoginComponent } from './Components/User/login/login.component';
import { GateKeeperDashboardComponent } from './Components/GateKeeper/gate-keeper-dashboard/gate-keeper-dashboard.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'gateKeeper/dashboard',
    component: GateKeeperDashboardComponent
  }
];
