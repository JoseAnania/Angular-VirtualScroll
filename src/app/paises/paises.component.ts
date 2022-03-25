import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {

  // propiedades (arreglo de paises que incia vacío)
  paises: any = [];

  // inyectamos el módulo para hacer peticiones http (Api a Rest Countries)
  constructor( private http: HttpClient) { }

  ngOnInit(): void {

    // hacemos la petición GET http a Rest Countries
    this.http.get('https://restcountries.com/v2/lang/es')
      .subscribe( paises => this.paises = paises);
  }

  // método para Dropear el país seleccionado 
  drop(evento: CdkDragDrop<any>) {

    moveItemInArray(this.paises, evento.previousIndex, evento.currentIndex);
  }
}
