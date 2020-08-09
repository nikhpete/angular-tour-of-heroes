import { Injectable } from '@angular/core';
import { Hero } from '../../../model/hero';
import { Observable } from 'rxjs';
import { MessageService } from '../../messages/service/message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class HeroService {
  private heroesUrl = 'api/heroes';
  constructor(private http: HttpClient, private msgSvc: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    this.log('fetched heroes');
    return this.http.get<Hero[]>(this.heroesUrl);
  }

  getHero(id: number): Observable<Hero> {
    this.log(`fetched hero id =${id}`);
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url);
  }

  private log(message: string) {
    this.msgSvc.add(`HeroService: ${message}`);
  }
}
