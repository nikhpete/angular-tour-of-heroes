import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './model/hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Shaktiman' },
      { id: 12, name: 'Superman' },
      { id: 13, name: 'Batman' },
      { id: 14, name: 'Green Lantern' },
      { id: 15, name: 'Wonderwoman' },
      { id: 16, name: 'Captian America' },
      { id: 17, name: 'Black Panther' },
      { id: 18, name: 'Krish' },
      { id: 19, name: 'PandMan' },
      { id: 20, name: 'Tornado' },
    ];
    return { heroes };
  }

  genId(heroes: Hero[]) {
    return heroes.length > 0
      ? Math.max(...heroes.map((hero) => hero.id)) + 1
      : 11;
  }
}
