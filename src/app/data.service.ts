import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Contacto } from "./pages/contact/contacto";

@Injectable()

export class dataServices{

    constructor(private http:HttpClient){}

    almacenar(contact:Contacto){
        
        this.http.put("https://dbmiweb-38e47-default-rtdb.europe-west1.firebasedatabase.app/datos.json", contact).subscribe(
            res=>console.log('guardado con exitos'+res),
            error=>console.log("error")
        )
    }

    delete(){ 
        this.http.delete('https://dbmiweb-38e47-default-rtdb.europe-west1.firebasedatabase.app/datos.json').subscribe(
            res=>console.log('eliminado con exito'),
            error=>console.log('error al tentar eliminar')
        )
    }


}