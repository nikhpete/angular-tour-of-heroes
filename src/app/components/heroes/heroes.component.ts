import { Component, OnInit } from '@angular/core';
import { Hero } from '../../model/hero';
import { HeroService } from './service/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  isNewHeroAdd: boolean = false;
  constructor(private svc: HeroService) {}

  ngOnInit(): void {
    this.fetchHeroes();
  }

  fetchHeroes(): void {
    this.svc.fetchHeroes().subscribe((val) => this.svc.setHeroes(val));
  }

  addHero(name: string): void {
    if (!name) return;
    this.svc.addHero({ name } as Hero).subscribe((hero) => {
      this.isNewHeroAdd = false;
    });
  }

  deleteHero(hero: Hero) {
    if (!hero) return;
    this.svc.removeHero(hero).subscribe();
  }
}
