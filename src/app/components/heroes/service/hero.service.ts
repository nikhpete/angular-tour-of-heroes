import { Injectable } from '@angular/core';
import { Hero } from '../../../model/hero';
import { HEROES } from '../../../mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from '../../messages/service/message.service';

@Injectable()
export class HeroService {
  constructor(private msgSvc: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    this.msgSvc.add('HeroService: fetched heroes');
    return of(HEROES);
  }
}
