import { Component, OnInit } from '@angular/core';
import { Hero } from '../../model/hero';
import { HeroService } from './service/hero.service';
import { MessageService } from '../messages/service/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  selectedhero: Hero = { id: 0, name: '' };
  heroes: Hero[];
  constructor(private service: HeroService, private msgSvc: MessageService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.service.getHeroes().subscribe((val) => (this.heroes = val));
  }

  onSelect(hero: Hero): void {
    this.selectedhero = {
      id: hero.id,
      name: hero.name,
    };
    this.msgSvc.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }
}
