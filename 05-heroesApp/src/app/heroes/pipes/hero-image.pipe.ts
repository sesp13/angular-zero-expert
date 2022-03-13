import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/heroes.interface';

@Pipe({
  name: 'heroImage',
  // pure: false,
})
export class HeroImagePipe implements PipeTransform {
  notFoundPath: string = 'assets/no-image.png';

  transform(hero?: Hero): string {
    if ((!hero?.id && !hero?.alt_img) || hero.alt_img == '') {
      return this.notFoundPath;
    } else if (hero?.alt_img) {
      return hero.alt_img;
    } else {
      return `assets/heroes/${hero?.id ?? ''}.jpg`;
    }
  }
}
