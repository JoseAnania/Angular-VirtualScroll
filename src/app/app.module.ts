import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ScrollingModule } from "@angular/cdk/scrolling";
import { AppComponent } from './app.component';
import { VirtualComponent } from './virtual/virtual.component';
import { DragComponent } from './drag/drag.component';
import { DragDropModule } from "@angular/cdk/drag-drop";
import { PaisesComponent } from './paises/paises.component';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    VirtualComponent,
    DragComponent,
    PaisesComponent
  ],
  imports: [
    BrowserModule,
    ScrollingModule, // importamos el módulo que nos permite usar el Virtual Scroll
    DragDropModule, // importamos el módulo que nos permite usar el Drag
    HttpClientModule, // importamos el módulo que nos permite usar Apis (de Rest Countries)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
