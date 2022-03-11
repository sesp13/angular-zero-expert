import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { Hero } from '../../interfaces/heroes.interface';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styles: [
    `
      img {
        max-width: 100%;
        border-radius: 5px;
      }
    `,
  ],
})
export class HeroComponent implements OnInit {
  hero?: Hero;
  constructor(
    private route: ActivatedRoute,
    private heroesService: HeroesService,
  ) {}

  ngOnInit(): void {
    this.route.params
      .pipe(switchMap((params) => this.heroesService.getHeroById(params.id)))
      .subscribe((hero: Hero) => {
        this.hero = hero;
      });
  }
}
