import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AppComponent } from './app.component';
import { CharacterComponent } from './components/character/character.component';
import { CharacterItemComponent } from './components/character-item/character-item.component';
import { CharacterItemDialogComponent } from './components/character/character-item-dialog/character-item-dialog.component';

import { PokeFilterPipe } from './pipes/poke-filter.pipe';
import { MypokemonComponent } from './components/mypokemon/mypokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent,
    CharacterItemComponent,
    CharacterItemDialogComponent,
    PokeFilterPipe,
    MypokemonComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatButtonModule,
    MatDialogModule,
    NoopAnimationsModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    MatToolbarModule,
    NgxPaginationModule,
    MatMenuModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
