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
import { DashboardComponent } from './Component/StationMaster/dashboard/dashboard.component';
import { StationMasterNavBarComponent } from './Component/StationMaster/station-master-nav-bar/station-master-nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    StationMasterNavBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    FormsModule,
    FormBuilder,
    AuthService,
    JwtHelper
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
