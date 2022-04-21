import { Component, OnInit } from '@angular/core';
import { Ingredient, ingredients, Recette } from '../../models/recette';

@Component({
  selector: 'app-recette',
  templateUrl: './recette.component.html',
  styleUrls: ['./recette.component.scss'],
})
export class RecetteComponent implements OnInit {
  public recette: Recette = { lignes: [] };
  public ingredians: Ingredient[] = ingredients;

  public addLigne(ingrediant: Ingredient, quantite: number = 1): void {
    const index = this.recette.lignes.findIndex(
      (ligne: { ingrediant: any; }) => ligne.ingrediant === ingrediant
    );

    if (index > -1) {
      this.recette.lignes[index].quantite++;
      return;
    }

    this.recette.lignes.push({
      ingrediant,
      quantite,
    });
  }

  public removeLigne(ingrediant: Ingredient): void {
    const index = this.recette.lignes.findIndex(
      (ligne: { ingrediant: any; }) => ligne.ingrediant === ingrediant
    );

    this.recette.lignes.splice(index, 1)
  }

  constructor() {}

  ngOnInit(): void {}
}
