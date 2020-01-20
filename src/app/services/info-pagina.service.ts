import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;

  equipo: any [] = [];

  constructor( private http: HttpClient ) {
    this.cargarInfo();
    this.cargarEquipo();
  }

  private cargarInfo() {
        // Leer el archivo JSON
        this.http.get('assets/data/data-pagina.json')
        // tslint:disable-next-line: deprecation
        .subscribe( (resp: InfoPagina) => {
  
          this.cargada = true;
          this.info = resp;
        });
  }

  private cargarEquipo() {

      // Leer el archivo JSON
      this.http.get('https://angular-html-d3176.firebaseio.com/equipo.json')
      // tslint:disable-next-line: deprecation
      .subscribe( ( resp: any[]) => {
        this.equipo = resp;
        //console.log(resp);
      });

      //this.equipo = resp
  }
}
