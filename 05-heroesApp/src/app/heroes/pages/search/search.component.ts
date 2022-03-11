import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Hero } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [],
})
export class SearchComponent implements OnInit {
  term: string = '';
  heroes: Hero[] = [];
  selectedHero?: Hero;

  constructor(private heroesService: HeroesService) {}

  ngOnInit(): void {}

  searching(): void {
    this.heroesService
      .getSugerences(this.term.trim())
      .subscribe((heroes) => (this.heroes = heroes));
  }

  optionSelected(event: MatAutocompleteSelectedEvent): void {
    const value = event.option.value;
    if (value == '') {
      this.selectedHero = undefined;
      return;
    }
    const hero: Hero = value;
    this.term = hero.superhero;
    // call the endpoint to get full hero information
    this.heroesService
      .getHeroById(hero?.id ?? '')
      .subscribe((fullHero: Hero) => {
        this.selectedHero = fullHero;
      });
  }
}
