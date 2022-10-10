import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import jwt_decode from 'jwt-decode';

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

  private userURL = 'http://localhost:5226/api/Users';
  private pokeURL = 'http://localhost:5226/api/MyPokemons';

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

  getMyPokemon(): Observable<any> {
    let token = localStorage.getItem('id_token') || '';
    let decoded_token: any = jwt_decode(token);
    return this.http.get<any>(`${this.userURL}/${decoded_token.UserId}`);
  }

  catchPokemon(pokemon: object): Observable<any> {
    return this.http.post<any>(this.pokeURL, pokemon, HttpOptions);
  }

  releasePokemon(id: number): Observable<any> {
    return this.http.delete<any>(`${this.pokeURL}/${id}`);
  }
}
