import { Component, OnInit } from '@angular/core';
import { Hero } from '../../model/hero';
import { HEROES } from '../../mock-heroes';
import { HeroService } from '../service/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  selectedhero: Hero = { id: 0, name: '' };
  heroes: Hero[];
  constructor(private service: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroes = this.service.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedhero = {
      id: hero.id,
      name: hero.name,
    };
  }
}
