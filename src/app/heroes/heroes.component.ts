import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  selectedhero: Hero;
  heroes: Hero[] = HEROES;
  constructor() {}

  ngOnInit(): void {}

  onSelect(hero: Hero): void {
    this.selectedhero = hero;
  }
}
