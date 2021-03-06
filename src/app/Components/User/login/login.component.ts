import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../Services/auth/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private toastr: ToastrService, private formBuilder: FormBuilder, private auth: AuthService, private router: Router) { }

  redirect() {
    const token: any = JSON.parse(localStorage.getItem('user'))
    if (token.roles[0].roleId.name === 'gateKeeper') {
      this.router.navigate(['/gateKeeper/dashboard'])
    }
  }

  ngOnInit() {
    if (localStorage.getItem('user')) {
      this.redirect()
    } else {
      this.createForm()
    }
  }

  createForm() {
    this.loginForm = this.formBuilder.group({
      number: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  performLogin() {
    this.auth.authenticate(this.loginForm.value.number, this.loginForm.value.password).subscribe((response: any) => {
      if (response.error === true) {
        this.toastr.error('An Error Occured. Try again', 'Error')
      } else if (response.data.user) {
        this.toastr.success('Logged in', 'Successfull')
        this.auth.createSession(response)
        this.redirect()
      } else {
        this.toastr.error(response.data, 'Cannot Login')
      }
    })
  }

}
