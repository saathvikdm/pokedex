import { Component, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-mypokemon',
  templateUrl: './mypokemon.component.html',
  styleUrls: ['./mypokemon.component.css'],
})
export class MypokemonComponent implements OnInit {
  pokemon: any = [];

  releasePokemon(poke: any) {
    console.log('event', poke);
    this.pokemon = this.pokemon.filter((p: any) => p?.id !== poke.id);
  }

  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.characterService.getMyPokemon().subscribe((pokemon) => {
      console.log(pokemon);
      this.pokemon = pokemon;
    });
  }
}
