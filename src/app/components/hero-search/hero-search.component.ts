import { Component, OnInit } from '@angular/core';
import { HeroService } from '../heroes/service/hero.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css'],
})
export class HeroSearchComponent implements OnInit {
  constructor(private svc: HeroService) {}

  ngOnInit(): void {}

  search(term: string) {
    this.svc.searcHeroes(term);
  }
}
