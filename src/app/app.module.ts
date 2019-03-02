import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/User/login/login.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './Services/auth/auth.service';
import { JwtHelper } from 'angular2-jwt';
import { GateKeeperDashboardComponent } from './Components/GateKeeper/gate-keeper-dashboard/gate-keeper-dashboard.component';
import { GateService } from './Services/gate/gate.service';
import { CommonModule } from '@angular/common';  


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GateKeeperDashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [
    FormsModule,
    FormBuilder,
    AuthService,
    JwtHelper,
    GateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
