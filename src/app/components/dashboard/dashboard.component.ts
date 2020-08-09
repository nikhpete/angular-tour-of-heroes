import { Component, OnInit } from '@angular/core';
import { Hero } from '../../model/hero';
import { HeroService } from '../heroes/service/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  constructor(private heroSvc: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroSvc
      .getHeroes()
      .subscribe((val) => (this.heroes = val.slice(1, 5)));
  }
}
