import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoModule } from './todo/todo.module';
import { Page404Component } from './404/page/page404/page404.component';
import { DisneyModule } from './disney/disney.module';
import { RecetteModule } from './recette/recette.module';
import { GameModule } from './game/game.module';

@NgModule({
  declarations: [AppComponent, Page404Component],
  imports: [BrowserModule, AppRoutingModule, TodoModule, DisneyModule, GameModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
