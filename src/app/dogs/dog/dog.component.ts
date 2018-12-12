import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CatsService } from '../../cats/cats.service';
import { DogsService } from '../dogs.service';
import { Subscription } from 'rxjs';

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
  catSubscriber: Subscription;

  constructor(private catService: CatsService, private dogService: DogsService) { }

  ngOnInit() {
    this.listenForCatMeowing();
  }

  listenForCatMeowing() {
    this.catSubscriber = this.catService.catSayMeow.subscribe((index) => {
      this.displayAngryDogText = `Woof! This cat is meowing! [${index}]`;
      this.addCssClass = true;
      this.clearTextAfter(3000);
    });
  }

  clearTextAfter(timeout: number) {
    setTimeout(() => {
      this.displayAngryDogText = '';
      this.addCssClass = false;
    }, timeout);
  }

  onDogWoofClick() {
    this.dogService.dogSayWoof.next(this.dogIndex);
  }

  ngOnDestroy(): void {
    this.catSubscriber.unsubscribe();
  }

}
