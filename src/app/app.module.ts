import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import FormsModule and ReactiveFormsModule
import { EtudiantComponent } from './components/etudiant/etudiant.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { EquipeComponent } from './components/equipe/equipe.component';

@NgModule({
  declarations: [
    AppComponent,
    EtudiantComponent,
    SidebarComponent,
    EquipeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, // Add FormsModule to the imports array
    ReactiveFormsModule, // Add ReactiveFormsModule to the imports array
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
