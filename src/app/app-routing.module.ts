// Nous importons notre page composant dans le routeur
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompteurComponent } from './compteur/page/compteur/compteur.component';
import { DisneyComponent } from './disney/components/disney/disney.component';
import { TodoPageComponent } from './todo/page/todo-page/todo-page.component';
import { RecetteComponent } from './recette/components/recette/recette.component';
import { GameComponent } from './game/page/game/game.component';

const routes: Routes = [
  // Affiche le composant TodoPageComponent quand l'url est todo
  { path: 'todo', component: TodoPageComponent },
  { path: 'compteur', component: CompteurComponent },
  { path: 'disney', component: DisneyComponent },
  { path: 'recette', component: RecetteComponent },
  { path: 'game', component: GameComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
