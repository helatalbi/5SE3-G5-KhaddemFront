import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Equipe } from '../models/Equipe';

@Injectable({
  providedIn: 'root'
})
export class EquipeService {
  private baseUrl = 'http://localhost:8089/Kaddem/equipe';

  constructor(private http: HttpClient) { }


  getEquipes(): Observable<Equipe[]> {
    return this.http.get<Equipe[]>(`${this.baseUrl}/retrieve-all-equipes`);
  }


  getEquipe(id: number): Observable<Equipe> {
    return this.http.get<Equipe>(`${this.baseUrl}/retrieve-equipe/${id}`);
  }


  addEquipe(Equipe: Equipe): Observable<Equipe> {
    return this.http.post<Equipe>(`${this.baseUrl}/add-equipe`, Equipe);
  }


  updateEquipe(Equipe: Equipe): Observable<Equipe> {
    return this.http.put<Equipe>(`${this.baseUrl}/update-equipe`, Equipe);
  }


  deleteEquipe(id: number): Observable<void> {
    const formData = new FormData();
    return this.http.post<any>(`${this.baseUrl}/delete/${id}`,formData );
  }
}
