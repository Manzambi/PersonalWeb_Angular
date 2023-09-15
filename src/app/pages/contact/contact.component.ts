import { Component } from '@angular/core';
import { Contacto } from './contacto';
import { dataServices } from 'src/app/data.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';
//import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

 
   contacto:Contacto

   datos:FormGroup

   constructor(private data:dataServices){
    this.datos = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      asunto: new FormControl('', Validators.required),
      mesaje: new FormControl('', Validators.required)
    })

   }

   onSubmit(){

       if(this.datos.valid)
       {
          
          console.log('el correo es : '+this.datos.get('email').value)
          this.contacto = new Contacto(this.datos.get('asunto').value, this.datos.get('email').value, this.datos.get('mesaje').value)
          this.data.almacenar(this.contacto) 
          this.datos.reset()
          alert('datos enviados con exito')
       }

       else{
          console.log('los datos son invaliudos')
       }
   }
 
/*  salvar(){
    this.contacto = new Contacto(this.nombre, this.email, this.mesaje)
    this.data.almacenar(this.contacto)
    this.nombre=''
    this.email=''
    this.mesaje=''
    alert('mensaje enviado con exito')
  }*/
  
}
