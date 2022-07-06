/* eslint-disable no-underscore-dangle */
import { Injectable } from '@angular/core';
import { Food } from '../interfaces/food.model';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  private _allFood: Food[] = [];

  get allFood() {
    return this._allFood;
  }
  constructor() {}

  addFood(foodItem: Food) {
    this._allFood = [foodItem, ...this._allFood];
    console.log(this._allFood);
  }
}