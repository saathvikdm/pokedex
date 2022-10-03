import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  Inject,
} from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { CharacterItemDialogComponent } from '../character/character-item-dialog/character-item-dialog.component';

import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-character-item',
  templateUrl: './character-item.component.html',
  styleUrls: ['./character-item.component.css'],
})
export class CharacterItemComponent implements OnInit {
  @Input() pokemon: any;
  @Output() releasePoke: EventEmitter<any> = new EventEmitter<any>();

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    let dialogRef = this.dialog.open(CharacterItemDialogComponent, {
      width: '250px',
      data: this.pokemon,
    });

    dialogRef.componentInstance.onRelease.subscribe(() =>
      this.releasePoke.emit(this.pokemon)
    );
  }

  ngOnInit(): void {}
}
