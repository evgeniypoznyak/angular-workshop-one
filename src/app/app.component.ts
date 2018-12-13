import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import * as fromApp from './shared/app-store/app-reducers';
import { State as AnimalsInterface } from './shared/animals-store/animals.reducers';
import * as AnimalsActions from './shared/animals-store/animals.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  private subscription: Subscription;

  constructor(private store: Store<fromApp.AppState>) {
  }

  ngOnInit(): void {

    this.subscription = this.store.select('animals').subscribe((animalsState: AnimalsInterface) => {

      if (animalsState.animals.dog.woof && animalsState.animals.cat.meow) {
        this.store.dispatch(new AnimalsActions.CatStopMeowing(undefined));
      }

      if (animalsState.animals.dog.woof && !animalsState.animals.cat.meow) {
        setTimeout(() => {
          this.store.dispatch(new AnimalsActions.DogStopWoofing(undefined));
        }, 2000);
      }

    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
