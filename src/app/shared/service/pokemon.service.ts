import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { pegeable } from '../model/pegeable.model';
import { Pokemons } from '../model/pokemons.model';
@Injectable({
  providedIn: 'root'
})
export class PokemonService {

 
  httpOptions = {
    hearders: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(
    private httpClient: HttpClient
  ) { }

  public getPage(apiURL:any): Observable<pegeable>{
    return this.httpClient.get<pegeable>(apiURL);
  }
  public getPokemonSingle(url: any): Observable<Pokemons>{
    return this.httpClient.get<Pokemons>(url)
  }
}
