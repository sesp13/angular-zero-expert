import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Hero } from '../interfaces/heroes.interface';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  private baseUrl = environment.baseUrl;
  private baseUrlHeroes: string = `${this.baseUrl}/heroes`;

  constructor(private http: HttpClient) {}

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.baseUrlHeroes);
  }

  getHeroById(id: string): Observable<Hero> {
    return this.http.get<Hero>(`${this.baseUrlHeroes}/${id}`);
  }

  getSugerences(query: string): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.baseUrlHeroes}/?q=${query}&_limit=5`);
  }

  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(`${this.baseUrlHeroes}/`, hero);
  }
  editHero(hero: Hero): Observable<Hero> {
    return this.http.put<Hero>(`${this.baseUrlHeroes}/${hero.id}`, hero);
  }
}
