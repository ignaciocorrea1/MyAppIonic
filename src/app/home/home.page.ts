import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  user = {
    "username": "",
    "password": ""
  }

  validar(){
    if(this.user.username.length != 0) {
      if(this.user.password.length != 0){
        // Funciona
        console.log("Usuario: "+this.user.username+"\nPassword: "+this.user.password)
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
