import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromApp from '../../shared/app-store/app-reducers';
import { State as AnimalsInterface } from '../../shared/animals-store/animals.reducers';
import * as AnimalsActions from '../../shared/animals-store/animals.actions';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.scss']
})
export class DogComponent implements OnInit, OnDestroy {
  @Input() dogImage: string;
  @Input() dogIndex: number;
  displayAngryDogText: string;
  addCssClass = false;
  private subscription: Subscription;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.listenForCatMeowing();
  }

  listenForCatMeowing() {
    this.subscription = this.store.select('animals').subscribe((animalsState: AnimalsInterface) => {
      if (animalsState.animals.cat.meow) {
        this.displayAngryDogText = `Woof! This cat is meowing! [${animalsState.animals.cat.index}]`;
        this.addCssClass = true;
      }
      if (!animalsState.animals.cat.meow && !animalsState.animals.dog.woof) {
        this.displayAngryDogText = '';
        this.addCssClass = false;
      }
    });
  }

  onDogWoofClick() {
    this.store.dispatch(new AnimalsActions.DogStartWoofing(this.dogIndex));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
