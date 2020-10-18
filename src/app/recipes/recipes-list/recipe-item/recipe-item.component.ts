import { Recipe } from './../../recipe.model';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {
@Input() recipe: Recipe;
@Output() SelectedRecipe = new EventEmitter<Recipe>();
  constructor() { }
  ngOnInit(): void {
  }

  onSelectRecipe() {
    this.SelectedRecipe.emit()
  }
}

