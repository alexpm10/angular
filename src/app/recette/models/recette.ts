export interface Recette {
    lignes: Ligne[];
  }
  
  export interface Ligne {
    ingrediant: Ingredient;
    quantite: number;
  }
  
  export interface Ingredient {
    icon: string;
    nom: string;
  }
  
  export const tomate: Ingredient = {
    icon: '🍅',
    nom: 'Tomate',
  };
  
  export const oignon: Ingredient = {
    icon: '🧅',
    nom: 'Oignon',
  };
  
  export const chouFleur: Ingredient = {
    icon: '🥦',
    nom: 'Choux Fleur',
  };
  
  export const poivron: Ingredient = {
    icon: '🫑',
    nom: 'Poivron',
  };
  
  export const aubergine: Ingredient = {
    icon: '🍆',
    nom: 'Aubergine',
  };
  
  export const ingredients: Ingredient[] = [
    tomate,
    oignon,
    chouFleur,
    poivron,
    aubergine,
  ];