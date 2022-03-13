import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ConfirmComponent } from '../../components/confirm/confirm.component';
import { Hero, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  title: string = '';
  publishers = [
    {
      id: 'Dc Comics',
      desc: 'DC - Comics',
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics',
    },
  ];

  hero: Hero = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: '',
  };

  constructor(
    private heroesService: HeroesService,
    private route: ActivatedRoute,
    private router: Router,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    if (this.router.url.includes('edit')) {
      // Only perform the request if we are editting
      this.route.params
        .pipe(switchMap(({ id }) => this.heroesService.getHeroById(id)))
        .subscribe((hero) => {
          this.hero = hero;
          this.title = `Edit ${this.hero.superhero}`;
        });
    } else {
      this.title = `New Hero`;
    }
  }

  save() {
    // Super hero name is required to save a new hero!!
    if (this.hero.superhero.trim().length === 0) {
      return;
    }

    if (this.hero.id) {
      // Update
      this.heroesService.editHero(this.hero).subscribe((hero) => {
        // Reload to see the full changes
        this.showSnackbar('Register updated!');
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      });
    } else {
      // Create new hero
      this.heroesService.addHero(this.hero).subscribe((hero) => {
        this.router.navigate(['/heroes/edit', hero.id]);
        this.showSnackbar('Register saved');
      });
    }
  }

  delete() {
    const dialog = this.dialog.open(ConfirmComponent, {
      width: '300px',
      // Break the reference just in case
      data: { ...this.hero },
    });
    dialog.afterClosed().subscribe((data) => {
      if (data) {
        this.heroesService.deleteHero(this.hero?.id ?? '').subscribe((result) => {
          this.router.navigate(['/heroes/list']);
        });
      }
    });
  }

  showSnackbar(message: string): void {
    this._snackBar.open(message, 'Ok!', { duration: 2500 });
  }
}
