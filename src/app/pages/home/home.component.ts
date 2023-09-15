import { Component } from '@angular/core';
import { Router, Route } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  constructor(private ruta:Router){}

  acercadelAutor(){
     this.ruta.navigateByUrl("/about")
  }

  MisDocumentos()
  {
     this.ruta.navigateByUrl('/documentos')
  }

  misProyectos(){
    this.ruta.navigateByUrl("/proyectos")
  }

}
