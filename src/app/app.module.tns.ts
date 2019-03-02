import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/User/login/login.component';
import { DashboardComponent } from './Component/StationMaster/dashboard/dashboard.component';
import { StationMasterNavBarComponent } from './Component/StationMaster/station-master-nav-bar/station-master-nav-bar.component';
import { GateKeeperDashboardComponent } from './Components/GateKeeper/gate-keeper-dashboard/gate-keeper-dashboard.component';
import { GateKeeperNavComponent } from './Components/GateKeeper/gate-keeper-nav/gate-keeper-nav.component';


// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from 'nativescript-angular/forms';

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    StationMasterNavBarComponent,
    GateKeeperDashboardComponent,
    GateKeeperNavComponent,
  ],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
