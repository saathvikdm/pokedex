import { Component, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css'],
})
export class CharacterComponent implements OnInit {
  pokemon = [];
  types = [];
  searchText = '';
  p: number = 1;
  typeFilter: string = '';

  constructor(private characterService: CharacterService) {}

  clickMenuItem(type: any) {
    this.typeFilter = type.name;
    this.p = 1;
    console.log(this.typeFilter);
    this.characterService
      .getPokemonsByType(this.typeFilter)
      .subscribe((pokemons) => {
        this.pokemon = pokemons.pokemon.map((item: any) => item.pokemon);
      });
  }

  searchFilter() {
    this.p = 0;
  }

  clickMenuReset() {
    this.characterService.getPokemon().subscribe((pokemon) => {
      console.log(pokemon);
      this.typeFilter = '';
      this.pokemon = pokemon?.results;
    });
  }

  ngOnInit(): void {
    this.characterService.getPokemonTypes().subscribe((type) => {
      this.types = type?.results;
    });

    this.characterService.getPokemon().subscribe((pokemon) => {
      console.log(pokemon);
      this.pokemon = pokemon?.results;
    });
  }
}
