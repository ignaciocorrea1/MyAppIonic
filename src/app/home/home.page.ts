import { keyframes } from '@angular/animations';
import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router, private animationController:AnimationController) {}
  spinner = false;
  user = {
    "username": "",
    "password": ""
  }

  generarAnimacion() {
    const selector = document.querySelector(".profileImage") as HTMLElement;
    
    const animacion = this.animationController.create()
    .addElement(selector) // Se referencia el elemento
    .duration(1) // Cuanto va a durar
    .iterations(Infinity) // Cuantas veces se repite
    .keyframes([
      {offset: 0, transform: 'scale(1)'},
      {offset: 0.5, transform: 'scale(0.5)'},
      {offset: 1, transform: 'scale(1)'},
    ])

    animacion.play();
  };

  // Esta funcion es como document.getready de JQuery o un DOMContentLoaded de js
  ngAfterContentInit() {
    this.generarAnimacion()
  };

  cambiarSpinner() {
    this.spinner = !this.spinner;
  };

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

        // Aparece el spinner
        this.cambiarSpinner();
        setTimeout(() => {

          // Se redirecciona a la pagina de perfil
          this.router.navigate(['/perfil'], navigationExtras);
          this.cambiarSpinner();
          
        }, 3000);

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
