import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonBaseComponent } from './pokemon-base.component';

describe('PokemonBaseComponent', () => {
  let component: PokemonBaseComponent;
  let fixture: ComponentFixture<PokemonBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
