import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CharacterService } from 'src/app/services/character.service';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-mypokemon',
  templateUrl: './mypokemon.component.html',
  styleUrls: ['./mypokemon.component.css'],
})
export class MypokemonComponent implements OnInit {
  pokemon: any = [];
  form: FormGroup;
  loggedIn: boolean = false;

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
    private router: Router
  ) {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
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
