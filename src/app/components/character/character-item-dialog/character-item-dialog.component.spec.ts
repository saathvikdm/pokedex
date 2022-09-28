import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterItemDialogComponent } from './character-item-dialog.component';

describe('CharacterItemDialogComponent', () => {
  let component: CharacterItemDialogComponent;
  let fixture: ComponentFixture<CharacterItemDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterItemDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterItemDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
