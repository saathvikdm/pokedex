import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CharacterService } from 'src/app/services/character.service';
import jwt_decode from 'jwt-decode';
import { AuthService } from 'src/app/services/auth.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
  MatSnackBarRef,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-character-item-dialog',
  templateUrl: './character-item-dialog.component.html',
  styleUrls: ['./character-item-dialog.component.css'],
})
export class CharacterItemDialogComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  pokeData: any;
  currentRoute: string = '';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private characterService: CharacterService,
    private dialogRef: MatDialogRef<CharacterItemDialogComponent>,
    private router: Router,
    private authService: AuthService,
    private _snackBar: MatSnackBar
  ) {}

  @Output() onRelease = new EventEmitter();

  catchPokemon() {
    if (this.authService.isLoggedIn()) {
      let token = localStorage.getItem('id_token') || '';
      let decoded_token: any = jwt_decode(token);
      this.data.UserId = decoded_token.UserId;
      this.characterService.catchPokemon(this.data).subscribe((res) => {
        if (res) {
          this._snackBar.open('Pokemon Caught', 'Dismiss', {
            duration: 3000,
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
          });

          this.dialogRef.close();
        }
      });
    } else {
      this._snackBar.open('Not logged in. Login to catch Pokemon.', 'Login', {
        duration: 5000,
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });

      this._snackBar._openedSnackBarRef
        ?.onAction()
        .subscribe(() => this.goToLogin());

      this.dialogRef.close();
    }
  }

  goToLogin() {
    this.router.navigate(['my-pokemon']);
  }

  releasePokemon() {
    this.characterService.releasePokemon(this.data.id).subscribe((res) => {
      this._snackBar.open('Pokemon released back into the wild!', 'Dismiss', {
        duration: 3000,
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
      this.dialogRef.close();
      this.onRelease.emit();
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
