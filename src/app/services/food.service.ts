/* eslint-disable no-underscore-dangle */
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { DocumentChangeAction } from '@angular/fire/compat/firestore';

import { Food } from '../interfaces/food.model';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  // private _allFood: Food[] = [];

  // get allFood() {
  //   return this._allFood;
  // }

  constructor(private afs: AngularFirestore) {}

  allFood() {
    return this.afs.collection('freezer').snapshotChanges();
  }

  addFood(foodItem: Food) {
    // this._allFood = [foodItem, ...this._allFood];
    // console.log(this._allFood);
  }
}
