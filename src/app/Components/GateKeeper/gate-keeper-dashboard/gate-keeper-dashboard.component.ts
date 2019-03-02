import { Component, OnInit } from '@angular/core';
import { GateService } from '../../../Services/gate/gate.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

declare var L: any;

@Component({
  selector: 'app-gate-keeper-dashboard',
  templateUrl: './gate-keeper-dashboard.component.html',
  styleUrls: ['./gate-keeper-dashboard.component.css']
})


export class GateKeeperDashboardComponent implements OnInit {

  gate: any = [];
  isGateOpened: Boolean = false;
  isTrainApproaching: Boolean = false;
  map: any;

  constructor(private gateService: GateService, private toastr: ToastrService, private router: Router) { }

  ngOnInit() {
    this.gateService.getGateUnderControlGateKeeper().subscribe((response: any) => {
      this.gate = response.data[0].gateId;
      this.isGateOpened = response.data[0].gateId.gateOpened;
      var mymap = L.map('mapid').setView([51.505, -0.09], 13);

    })

    setInterval(() => {
      this.gateService.isTrainApproaching(this.gate._id).subscribe((response: any) => {
        this.isTrainApproaching = response.data
      })
    }, 1000)

    setInterval(() => {
      this.gateService.isGateOpened(this.gate._id).subscribe((response: any) => {
        this.isGateOpened = response.data
      })
    }, 1000)
  }

  openGate() {
    this.gateService.openGate(this.gate._id).subscribe((response: any) => {
      this.toastr.success(response.data, 'Message')
    })
  }


  closeGate() {
    this.gateService.closeGate(this.gate._id).subscribe((response: any) => {
      this.toastr.success(response.data, 'Message')
    })
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login'])
  }

}
