import { Component, Input } from '@angular/core';
import { Hero } from 'src/app/heroes/interfaces/heroes.interface';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
})
export class HeroCardComponent {
  @Input() hero?: Hero;
}
