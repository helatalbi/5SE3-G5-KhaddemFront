import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import {EtudiantComponent} from "./components/etudiant/etudiant.component";
import {EquipeComponent} from "./components/equipe/equipe.component";
import { SidebarComponent } from './components/sidebar/sidebar.component';



const routes: Routes = [
  { path: 'etudiant', component: EtudiantComponent },
  { path: 'sidebar', component: SidebarComponent },
  { path: 'equipe', component: EquipeComponent },

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
