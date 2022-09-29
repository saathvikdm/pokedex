import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const HttpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  private apiURL = 'https://pokeapi.co/api/v2/pokemon?limit=1000';

  constructor(private http: HttpClient) {}

  getPokemon(): Observable<any> {
    return this.http.get<any>(this.apiURL);
  }

  getPokemonDetails(pokeURL: string): Observable<any> {
    return this.http.get<any>(pokeURL);
  }

  getPokemonTypes(): Observable<any> {
    return this.http.get<any>('https://pokeapi.co/api/v2/type');
  }

  getPokemonsByType(type: string): Observable<any> {
    return this.http.get<any>(`https://pokeapi.co/api/v2/type/${type}`);
  }
}
