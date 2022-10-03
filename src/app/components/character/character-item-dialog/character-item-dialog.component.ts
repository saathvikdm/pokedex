import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-character-item-dialog',
  templateUrl: './character-item-dialog.component.html',
  styleUrls: ['./character-item-dialog.component.css'],
})
export class CharacterItemDialogComponent implements OnInit {
  pokeData: any;
  currentRoute: string = '';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private characterService: CharacterService,
    private dialogRef: MatDialogRef<CharacterItemDialogComponent>,
    private router: Router
  ) {}

  @Output() onRelease = new EventEmitter();

  catchPokemon() {
    this.characterService.catchPokemon(this.data).subscribe((res) => {
      if (res) {
        alert('Pokemon Caught!');
        this.dialogRef.close();
      }
    });
  }

  releasePokemon() {
    this.characterService.releasePokemon(this.data.id).subscribe((res) => {
      alert('Pokemon released back into the wild!');
      this.dialogRef.close();
      this.onRelease.emit();
      console.log('Pokemon Released!');
    });
  }

  ngOnInit(): void {
    this.currentRoute = this.router.url;

    this.pokeData = this.characterService
      .getPokemonDetails(this.data.url) // Gets details about pokemon from the service
      .subscribe((pokemon) => {
        console.log(pokemon);
        this.pokeData = pokemon;
      });
  }
}
