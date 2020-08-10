import { Component, OnInit, Input } from '@angular/core';
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

  constructor(
    private route: ActivatedRoute,
    private svc: HeroService,
    private loc: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.svc.getHero(id).subscribe((hero) => (this.hero = hero));
  }

  goBack(): void {
    this.loc.back();
  }

  save(): void {
    this.svc.updateHero(this.hero).subscribe(() => this.goBack());
  }
}
