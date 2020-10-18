import { Component, OnInit } from '@angular/core';
import { Ingredient } from './ingredient';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    {
      name: 'Tomato',
      amount: 6
    },
    {
      name: 'Onion',
      amount: 7
    },
    {
      name: 'Apple',
      amount: 15
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

  addIngredient(ingredient : Ingredient) {
    this.ingredients.push(ingredient)
  }

}
