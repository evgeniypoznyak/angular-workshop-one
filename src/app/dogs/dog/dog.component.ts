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
    this.subscription = this.store.select('animals').subscribe((animalsInterface: AnimalsInterface) => {
      if (animalsInterface.animals.cat.meow) {
        this.displayAngryDogText = `Woof! This cat is meowing! [${animalsInterface.animals.cat.index}]`;
        this.addCssClass = true;
        this.clearTextAfter(2000);
      }
    });
  }

  clearTextAfter(timeout: number) {
    setTimeout(() => {
      this.displayAngryDogText = '';
      this.addCssClass = false;
    }, timeout);
  }

  onDogWoofClick() {
    this.store.dispatch(new AnimalsActions.DogStartWoofing(this.dogIndex));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
