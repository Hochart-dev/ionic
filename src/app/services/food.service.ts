/* eslint-disable no-underscore-dangle */
import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  DocumentReference,
} from '@angular/fire/compat/firestore';
import { DocumentChangeAction } from '@angular/fire/compat/firestore';

import { from, Observable } from 'rxjs';

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

  addFood(foodItem: Food): Promise<DocumentReference> {
    return this.afs.collection('freezer').add(foodItem);
  }

  deleteFood(id: string): Observable<any> {
    return from(this.afs.doc(`freezer/${id}`).delete());
  }
}
