import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from '../../../model/hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../service/hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;
  @Output() deleteRequest = new EventEmitter<Hero>();
  @Output() unSelectHero = new EventEmitter<Hero>();

  constructor(
    private route: ActivatedRoute,
    private svc: HeroService,
    private loc: Location
  ) {}

  ngOnInit(): void {}

  goBack(): void {
    this.unSelectHero.emit({ id: 0, name: '' });
  }

  save(): void {
    this.svc.updateHero(this.hero).subscribe(() => this.goBack());
  }

  deleteHero(hero: Hero) {
    this.deleteRequest.emit(hero);
    this.goBack();
  }
}
