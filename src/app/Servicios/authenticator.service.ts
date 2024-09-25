import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatorService {

  constructor() { }
  /*
  Login() = Conectar
  Logout() = Desconectar
  isConnected() = Esta conectado?
  */

  // Variable de estado para validar si esta o no
  private estado: boolean = false;

  login(username:String, password:String):boolean {
    if(username == "ignacio" && password == "pass1234") {
      this.estado = true;
      return true;
    };

    return false;
  };

  logout() {
    this.estado = false;
  };

  isConnected():boolean {
    return this.estado;
  };
};
