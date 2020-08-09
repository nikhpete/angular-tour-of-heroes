import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroService } from './components/heroes/service/hero.service';
import { HeroDetailComponent } from './components/heroes/hero-detail/hero-detail.component';
import { MessageService } from './components/messages/service/message.service';
import { MessagesComponent } from './components/messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [HeroService, MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
