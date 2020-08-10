import { Component, OnInit } from '@angular/core';
import { Hero } from '../../model/hero';
import { HeroService } from './service/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  isNewHeroAdd: boolean = false;
  constructor(private svc: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.svc.getHeroes().subscribe((val) => (this.heroes = val));
  }

  addHero(name: string): void {
    if (!name) return;
    this.svc.addHero({ name } as Hero).subscribe((hero) => {
      this.heroes.push(hero);
      this.isNewHeroAdd = false;
    });
  }
}
