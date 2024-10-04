import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticatorService } from 'src/app/Servicios/authenticator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  user = {
    "username": "",
    "email": "",
    "password": ""
  }

  constructor(private auth:AuthenticatorService, private router:Router) { }

  registrar() {
    this.auth.registrar(this.user);

    this.router.navigate(['/home']);
  }

  ngOnInit() {
  }

}
