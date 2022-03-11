import { Component, Input } from '@angular/core';
import { Hero } from 'src/app/heroes/interfaces/heroes.interface';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styles: [
    `
      mat-card {
        margin-top: 20px;
      }
    `,
  ],
})
export class HeroCardComponent {
  @Input() hero?: Hero;
}
