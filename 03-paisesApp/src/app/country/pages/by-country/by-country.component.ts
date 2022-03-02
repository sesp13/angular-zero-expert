import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `,
  ],
})
export class ByCountryComponent {
  term: string = '';
  hasError: boolean = false;
  countries: Country[] = [];
  suggestedCountries: Country[] = [];
  showSuggerences: boolean = false;

  constructor(private countryService: CountryService) {}

  search(term: string) {
    // Set local propertie
    this.term = term;
    this.hasError = false;
    this.countryService.searchCountry(this.term).subscribe(
      (countries: Country[]) => {
        this.countries = countries;
      },
      (err) => {
        this.hasError = true;
        this.countries = [];
      }
    );
  }

  suggerences(term: string) {
    this.showSuggerences = true;
    this.term = term;
    this.countryService.searchCountry(term).subscribe(
      (countries: Country[]) => {
        this.suggestedCountries = countries.splice(0, 5);
      },
      (err) => {
        this.suggestedCountries = [];
      }
    );
  }

  searchSuggested() {
    this.showSuggerences = false;
    this.search(this.term);
  }
}
