/* Componente generado para la lógica del Virtual Scroll */
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-virtual',
  templateUrl: './virtual.component.html',
  styleUrls: ['./virtual.component.css']
})
export class VirtualComponent implements OnInit {

  @ViewChild(CdkVirtualScrollViewport) viewport: CdkVirtualScrollViewport | undefined;

  // propiedad (Arreglo de 500 personas)
  personas = Array(500).fill(0);

  constructor() { }

  ngOnInit(): void {
    console.log(this.personas);
  }

  // método para la navegación del botón Ir al Final
  irFinal() {

    this.viewport?.scrollToIndex(this.personas.length);
  }

  // método para la navegación del botón Ir al Inicio
  irInicio() {

    this.viewport?.scrollToIndex(0);
  }

  // método para la navegación del botón Ir a la Mitad
  irMitad() {

    this.viewport?.scrollToIndex(this.personas.length / 2);
  }
}
