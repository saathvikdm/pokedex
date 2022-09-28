import { Component, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css'],
})
export class CharacterComponent implements OnInit {
  pokemon = [];
  searchText = '';

  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.characterService.getPokemon().subscribe((pokemon) => {
      console.log(pokemon);
      this.pokemon = pokemon?.results;
    });
  }
}
