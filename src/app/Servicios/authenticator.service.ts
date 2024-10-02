import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatorService {

  user = {
    "username": "ignacio",
    "correo": "ignacio@duocuc.cl",
    "password": "pass1234"
  };

  constructor(private storage:StorageService) {  
    this.storage.set(this.user.username, this.user)
  };
  /*
  Login() = Conectar
  Logout() = Desconectar
  isConnected() = Esta conectado?
  */

  // Variable de estado para validar si esta o no
  private estado: boolean = false;

  loginBDD(username:string, password:string):boolean {
    this.storage.get(username).then((res) => {
      if (res.password == password) {
        this.estado = true;
      } else {
        this.estado = false;
      }
    });

    return this.estado;

    return false;
  }

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
