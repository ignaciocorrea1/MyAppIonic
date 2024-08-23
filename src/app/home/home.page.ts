import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  user = {
    "username": "",
    "password": ""
  }

  validar(){
    if(this.user.username.length != 0) {
      if(this.user.password.length != 0){
        // Funciona
        console.log("Usuario: "+this.user.username+"\nPassword: "+this.user.password)
        let navigationExtras: NavigationExtras = {
          state: {
            username: this.user.username,
            password: this.user.password,
          },
        };
        // Se viaja a la pagina de perfil
        this.router.navigate(['/perfil'], navigationExtras);
      }else{
        // Contraseña vacia
        console.log("Contraseña vacia")
      }
    }else{
      // Usuario vacio
        console.log("Usuario vacio")
    }
  }
}
