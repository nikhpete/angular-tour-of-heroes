import { Injectable } from '@angular/core';
import { Hero } from '../../../model/hero';
import { Observable, of } from 'rxjs';
import { MessageService } from '../../messages/service/message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class HeroService {
  private heroesUrl = 'api/heroes';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  heroes: Hero[];
  constructor(private http: HttpClient, private msgSvc: MessageService) {}

  setHeroes(val: Hero[]) {
    this.heroes = val;
  }

  getHeroes(): Hero[] {
    return this.heroes;
  }

  addHero(hero: Hero) {
    return this.http.post(this.heroesUrl, hero, this.httpOptions).pipe(
      tap((val: Hero) => {
        this.log(`added hero:${val.name}`);
        this.heroes.push(val);
      }),
      catchError(this.handleError<any>('addHero'))
    );
  }

  updateHero(hero: Hero) {
    return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
      tap((_) => this.log(`updated hero id=${hero.name}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  removeHero(hero: Hero) {
    const url = `${this.heroesUrl}/${hero.id}`;
    return this.http.delete(url, this.httpOptions).pipe(
      tap((_: Hero) => {
        this.log(`deleted hero:${hero.name}`);
        this.heroes = this.heroes.filter((h) => h !== hero);
      }),
      catchError(this.handleError<Hero>('deleteHero'))
    );
  }

  fetchHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl).pipe(
      tap((_) => this.log('fetched heroes')),
      catchError(this.handleError<Hero[]>('getHeroes', []))
    );
  }

  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url, this.httpOptions).pipe(
      tap((_) => this.log(`fetched hero id =${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }

  private log(message: string) {
    this.msgSvc.add(`HeroService: ${message}`);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      this.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
