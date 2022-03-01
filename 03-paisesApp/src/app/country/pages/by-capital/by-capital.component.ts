import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styles: [],
})
export class ByCapitalComponent {
  term: string = '';
  hasError: boolean = false;
  countries: Country[] = [];

  constructor(private countryService: CountryService) {}

  search(term: string) {
    // Set local propertie
    this.term = term;
    this.hasError = false;
    this.countryService.searchCountryByCapital(this.term).subscribe(
      (countries: Country[]) => {
        this.countries = countries;
      },
      (err) => {
        this.hasError = true;
        this.countries = [];
      }
    );
  }

  suggerences(term: string) {}
}
