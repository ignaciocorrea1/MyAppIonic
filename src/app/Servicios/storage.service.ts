import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  // Se define la BD
  private bdd: Storage = new Storage();
  private bddCheck: Promise<void>;

  constructor(private storage:Storage) {
    this.bddCheck = this.onInit();
  };

  async onInit() {
    const storage = await this.storage.create();
    this.bdd = storage;
  };

  async bddConectada():Promise<void> {
    await this.bddCheck;
  };

  // Recuperar informacion
  async get(key:string):Promise<any> {
    await this.bddConectada();

    return this.bdd.get(key);
  };

  // Agregar o actualizar la informacion
  async set(key:string, valor:any) {
    await this.bddConectada();

    this.bdd.set(key, valor);

    console.log("Actualizado con exito");
  };

  // Borrar
  async borrar(key:string) {
    await this.bddConectada();
    
    this.bdd.remove(key);

    console.log("Borrado con exito");
  };
};
