import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CharacterService } from 'src/app/services/character.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
  MatSnackBarRef,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-mypokemon',
  templateUrl: './mypokemon.component.html',
  styleUrls: ['./mypokemon.component.css'],
})
export class MypokemonComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  pokemon: any = [];
  form: FormGroup;
  loggedIn: boolean = false;
  register: boolean = false;

  releasePokemon(poke: any) {
    console.log('event', poke);
    this.pokemon = this.pokemon.filter((p: any) => p?.id !== poke.id);
  }

  getMyPokemons() {
    this.characterService.getMyPokemon().subscribe((pokemon) => {
      console.log(pokemon.pokemons);
      this.pokemon = pokemon.pokemons;
    });
  }

  constructor(
    private characterService: CharacterService,
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {
    this.form = this.fb.group({
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required],
      displayname: ['', Validators.required],
      username: ['', Validators.required],
    });
  }

  registerAction() {
    this.register = !this.register;
  }

  signUp() {
    const val = this.form.value;
    if (val.email && val.username && val.password && val.displayname) {
      this.authService
        .signUp(val.email, val.username, val.password, val.displayname)
        .subscribe((res) => {
          if (res) {
            this.registerAction();
            this._snackBar.open('Successfully registered!', '', {
              duration: 3000,
              horizontalPosition: this.horizontalPosition,
              verticalPosition: this.verticalPosition,
            });
          }
        });
    }
  }

  login() {
    const val = this.form.value;

    if (val.email && val.password) {
      this.authService.login(val.email, val.password).subscribe((res) => {
        localStorage.setItem('id_token', res);
        this.authService.loggedIn.next(true);
        this.loggedIn = true;
        this.getMyPokemons();
        // this.router.navigateByUrl('/');
      });
    }
  }

  ngOnInit(): void {
    this.loggedIn = this.authService.isLoggedIn();

    if (this.loggedIn) {
      this.getMyPokemons();
    }
  }
}
