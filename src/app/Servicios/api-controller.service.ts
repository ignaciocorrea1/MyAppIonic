import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiControllerService {

  apiURL = "http://localhost:3000/";

  constructor(private http:HttpClient) { }

  obtenerUsuarios():Observable<any> {
    return this.http.get(this.apiURL+"users/");
  };

  consultarUsuario(id:string):Observable<any> {
    return this.http.get(this.apiURL+"users/"+id)
  }

  insertarUsuario(data:any):Observable<any> {
    return this.http.post(this.apiURL+"users/", data);
  };

  borrarUsuario(id:string):Observable<any> {
    return this.http.delete(this.apiURL+"users/"+id);
  };

  modificarUsuario(id:string, data:any):Observable<any> {
    return this.http.put(this.apiURL+"users/"+id, data);
  };
}
