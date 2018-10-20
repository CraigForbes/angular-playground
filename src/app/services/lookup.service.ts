import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Country, CountryList } from '../lists/country.list';
import { HeroList, Hero } from '../lists/hero.list';

@Injectable({
  providedIn: 'root'
})
export class LookupService {

  countryList = new CountryList;
  heroList = new HeroList;

  getCountries(): Observable<Country[]> {
    return of(this.countryList.countries);
  }

  getHeroes(): Observable<Hero[]> {
    return of(this.heroList.heroes);
  }
}
