import { Component, ElementRef, OnInit, ViewChild, EventEmitter,Output } from '@angular/core';
import { Ingredient } from './../ingredient';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('ingredientRef', { static: false }) ingredientName: ElementRef;
  @ViewChild('amountRef', { static: false }) amount: ElementRef;
  @Output() onAddIngredient = new EventEmitter<Ingredient>()
  constructor() { }

  ngOnInit(): void {
  }

  addIngredient(name, amount) {
    name = this.ingredientName.nativeElement.value;
    amount =this.amount.nativeElement.value;
    const ingObj = {
      name: name,
      amount: amount
    }
      this.onAddIngredient.emit(ingObj)    
  }

}
