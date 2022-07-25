import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { Food } from '../interfaces/food.model';
import { FoodService } from '../services/food.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit, OnDestroy {
  allFoodInFreezer = [];
  sub: Subscription;
  constructor(private foodService: FoodService) {}

  ngOnInit() {
    // this.allFoodInFreezer = this.foodService.allFood;
    this.sub = this.foodService.allFood().subscribe(
      (data: any) =>
        (this.allFoodInFreezer = data.map(
          (e: any) =>
            ({
              id: e.payload.doc.id,
              ...e.payload.doc.data(),
            } as Food)
        )),
      (err) => {}
    );
    console.log('ngOnInit', this.allFoodInFreezer);
  }

  ionViewWillEnter() {
    // this.allFoodInFreezer = this.foodService.allFood;
    console.log('IonViewWillEnter', this.allFoodInFreezer);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
