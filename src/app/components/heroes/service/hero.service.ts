import { Injectable } from '@angular/core';
import { Hero } from '../../../model/hero';
import { HEROES } from '../../../mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from '../../messages/service/message.service';
import { ThrowStmt } from '@angular/compiler';

@Injectable()
export class HeroService {
  constructor(private msgSvc: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    this.msgSvc.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    this.msgSvc.add(`HeoService: fetched hero id =${id}`);
    return of(HEROES.find((hero) => hero.id === id));
  }
}
