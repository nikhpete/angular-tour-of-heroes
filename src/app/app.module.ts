import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { HeroService } from './components/service/hero.service';
import { from } from 'rxjs';

@NgModule({
  declarations: [AppComponent, HeroesComponent, HeroDetailComponent],
  imports: [BrowserModule, FormsModule],
  providers: [HeroService],
  bootstrap: [AppComponent],
})
export class AppModule {}
