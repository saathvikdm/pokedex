import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterComponent } from './components/character/character.component';
import { MypokemonComponent } from './components/mypokemon/mypokemon.component';

const routes: Routes = [
  { path: '', component: CharacterComponent },
  { path: 'my-pokemon', component: MypokemonComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
