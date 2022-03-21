import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountrySmall } from '../../interfaces/country-small.inteface';
import { CountryService } from '../../services/country.service';

import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/country.interface';
@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
})
export class SelectorComponent implements OnInit {
  myForm: FormGroup = this.fb.group({
    region: ['', [Validators.required]],
    country: ['', [Validators.required]],
    frontier: ['', [Validators.required]],
  });

  // Fill selectors
  regions: string[] = [];
  countries: CountrySmall[] = [];
  frontiers: CountrySmall[] = [];

  // UI
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private countryService: CountryService
  ) {}

  ngOnInit(): void {
    this.regions = this.countryService.regions;

    // If the region changes
    this.myForm
      .get('region')
      ?.valueChanges.pipe(
        tap(() => {
          this.myForm.get('country')?.reset('');
          this.loading = true;
        }),
        switchMap((region) => this.countryService.getCountriesByRegion(region))
      )
      .subscribe((countries: CountrySmall[]) => {
        this.countries = countries;
        this.loading = false;
      });

    // If the country changes
    this.myForm
      .get('country')
      ?.valueChanges.pipe(
        tap(() => {
          this.myForm.get('frontier')?.reset('');
          this.loading = true;
        }),
        switchMap((code) => this.countryService.getCountryByCode(code)),
        switchMap((lst: Country[] | null) => {
          // Get borders
          lst = lst ?? [];
          const borders = lst[0]?.borders ?? [];
          return this.countryService.getCountriesByCodes(borders);
        })
      )
      .subscribe((relatedCountries) => {
        this.frontiers = [];
        this.loading = false;
        relatedCountries.forEach((country: CountrySmall | null) => {
          if (country != null) this.frontiers.push(country);
        });
      });
  }

  save() {
    console.log(this.myForm.value);
  }
}
