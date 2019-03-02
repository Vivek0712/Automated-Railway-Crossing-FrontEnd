import { Injectable } from '@angular/core';
import { JwtHelper } from 'angular2-jwt';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GateService {
  authToken: any;
  user: any;
  constructor(private jwtHelper: JwtHelper, private http: HttpClient) { }

  authenticate(phoneNumber: any, password: any) {
    const body = { userPhoneNumber: phoneNumber, password: password };
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/user/authenticate', body).pipe(map(res => res, { 'headers': headers }));
  }

  getGateUnderControlGateKeeper() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/gateKeeperMap/getGate/' + JSON.parse(localStorage.getItem('user'))._id);
  }

  isTrainApproaching(gateId: any) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/gate/isTrainApproachingGate/' + gateId);
  }

  isGateOpened(gateId: any) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/gate/isGateOpened/' + gateId);
  }

  openGate(gateId: any) {
    const body = { gateId: gateId};
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/gate/openGate', body).pipe(map(res => res, { 'headers': headers }));
  }

  closeGate(gateId: any) {
    const body = { gateId: gateId};
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/gate/closeGate', body).pipe(map(res => res, { 'headers': headers }));
  }

}
