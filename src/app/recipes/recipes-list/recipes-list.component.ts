import { Recipe } from './../recipe.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] =[
    {
      name: 'test recipe',
      description: 'this a test description',
      image: '../../../assets/chicken-fajitas-horizontal-jpg-1522721531.jpg'
    },
    {
      name: 'test recipe',
      description: 'this a test description',
      image: '../../../assets/One-Pot-Chicken-Parmesan-Pasta-feat.jpg'
    },
    {
      name: 'test recipe',
      description: 'this a test description',
      image: '../../../assets/1537973085542.jpeg'
    }
  ]
  @Output() selectedRecipe = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(selectedRecipe: Recipe){
    this.selectedRecipe.emit(selectedRecipe)
    console.log(selectedRecipe)
  }
}
