import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import * as fromApp from '../../shared/app-store/app-reducers';
import { State as AnimalsInterface } from '../../shared/animals-store/animals.reducers';
import * as AnimalsActions from '../../shared/animals-store/animals.actions';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.scss']
})
export class CatComponent implements OnInit, OnDestroy {
  @Input() catImage: string;
  @Input() catIndex: number;
  displayScaryCatText: string;
  addCssClass = false;
  dogIndex: number;
  private subscription: Subscription;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.listenForDogWoofing();
  }

  listenForDogWoofing() {
    this.subscription = this.store.select('animals').subscribe((animalsState: AnimalsInterface) => {

      if (animalsState.animals.dog.woof) {
        this.dogIndex = animalsState.animals.dog.index;
        this.addCssClass = true;
        this.displayScaryCatText = `Oh no! Dog #[${this.dogIndex}] is woofing!`;
      }

      if (!animalsState.animals.cat.meow && !animalsState.animals.dog.woof) {
        this.displayScaryCatText = '';
        this.addCssClass = false;
      }

    });
  }

  onMeowClick() {
    this.store.dispatch(new AnimalsActions.CatStartMeowing(this.catIndex));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
