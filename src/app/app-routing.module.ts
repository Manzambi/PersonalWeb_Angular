import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { MisdocumentosComponent } from './pages/misdocumentos/misdocumentos.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';


const routes: Routes = [  {path:"", component:InicioComponent},
                          {path:"especialidad", component:MenuComponent},
                          {path:"about", component:AboutComponent},
                          {path:"contact", component:ContactComponent},
                          {path:"documentos", component:MisdocumentosComponent},
                          {path:'proyectos', component:ProyectosComponent}
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
