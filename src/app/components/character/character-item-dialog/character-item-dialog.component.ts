import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-character-item-dialog',
  templateUrl: './character-item-dialog.component.html',
  styleUrls: ['./character-item-dialog.component.css'],
})
export class CharacterItemDialogComponent implements OnInit {
  pokeData: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private characterService: CharacterService
  ) {}

  ngOnInit(): void {
    this.pokeData = this.characterService
      .getPokemonDetails(this.data.url) // Gets details about pokemon from the service
      .subscribe((pokemon) => {
        console.log(pokemon);
        this.pokeData = pokemon;
      });
  }
}
