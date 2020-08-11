import { Component, OnInit } from '@angular/core';
import { Hero } from '../../model/hero';
import { HeroService } from '../heroes/service/hero.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  heroes: Hero[];
  constructor(public svc: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.svc.fetchHeroes().subscribe((val) => {
      this.svc.setHeroes(val);
      this.heroes = this.svc.getHeroes().slice(1, 5);
    });
  }
}
