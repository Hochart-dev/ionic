import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { Food } from '../interfaces/food.model';
import { FoodService } from '../services/food.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit, OnDestroy {
  allFoodInFreezer = [];
  sub: Subscription;
  isLoading = false;

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

  edit(id) {
    console.log('id', id);
  }

  delete(id) {
    console.log('id', id);
    this.isLoading = true;
    this.foodService
      .deleteFood(id)
      .pipe(take(1))
      .subscribe(
        (data) => {
          this.isLoading = false;
        },
        (err) => {
          this.isLoading = false;
          console.error(err);
        }
      );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
