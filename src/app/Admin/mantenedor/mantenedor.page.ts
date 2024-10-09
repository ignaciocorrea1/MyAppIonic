import { Component, OnInit } from '@angular/core';
import { ApiControllerService } from 'src/app/Servicios/api-controller.service';

@Component({
  selector: 'app-mantenedor',
  templateUrl: './mantenedor.page.html',
  styleUrls: ['./mantenedor.page.scss'],
})
export class MantenedorPage implements OnInit {

  users:any [] = [0]

  constructor(private api:ApiControllerService) { }

  ngOnInit() {
    this.cargarUsuarios();
  }

  cargarUsuarios() {
    this.api.obtenerUsuarios().subscribe(
      (data) => {
        this.users = data;
      },
      (error) => {
        console.log("Error en el sistema: " + error)
      }
    )
  }

}
