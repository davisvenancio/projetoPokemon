import { Component, OnInit } from '@angular/core';
import { pegeable } from 'src/app/shared/model/pegeable.model';
import { Pokemons } from 'src/app/shared/model/pokemons.model';
import { PokemonService } from 'src/app/shared/service/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  apiURL = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=45';
  pg: pegeable[] = [];
  pokemonsUrl : pegeable[] = [];
  pokemonsPage: Pokemons[] = [];
  previous: any;
  next: any;

  constructor(
    public pkService: PokemonService
  ) { }

  ngOnInit(): void {
    this.getPage(this.apiURL);
  }

  getPage(apiURL:any){
    this.pkService.getPage(apiURL).subscribe(data => {
      this.pg = data.results;

      if(data.previous === null){
        this.previous = false;
      }else{
        this.previous = data.previous;
      }

      if(data.next === null){
        this.next = false;
      }else{
        this.next = data.next;
      }

      this.pg.forEach(element => {
        this.pkService.getPokemonSingle(element.url).subscribe(data =>{
          this.pokemonsPage.push(data);
          this.favLocalStr(data);
        });
      });
    });
  }
  getImg(img:any) {
    return img.other.dream_world.front_default;
  }
  pkType(type: any){
    return type.type.name;
  }

  bntPrevious(){
    this.pokemonsPage = [];
    this.getPage(this.previous);
  }
  bntNext(){
    this.pokemonsPage = [];
    this.getPage(this.next);
  }
  favPokemon(pokemon:any){
    pokemon.thisFav = !pokemon.thisFav;
		pokemon.thisFav ? localStorage.setItem(pokemon.name, pokemon.id) : localStorage.removeItem(pokemon.name)
  }
  favLocalStr(pokemon:any) {
		return localStorage.getItem(pokemon.name) ?  pokemon.thisFav = true : pokemon.thisFav = false;
	}
}
