import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MypokemonComponent } from './mypokemon.component';

describe('MypokemonComponent', () => {
  let component: MypokemonComponent;
  let fixture: ComponentFixture<MypokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MypokemonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MypokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
