import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pipe, switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-see-country',
  templateUrl: './see-country.component.html',
  styles: [],
})
export class SeeCountryComponent implements OnInit {
  country?: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private countryService: CountryService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.countryService.searchCountryById(id)),
        tap(console.log)
      )
      .subscribe((country) => {
        this.country = country;
      });
  }
}
