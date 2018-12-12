import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CatsService } from '../cats.service';
import { DogsService } from '../../dogs/dogs.service';
import { Subscription } from 'rxjs';

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
  dogSubscriber: Subscription;

  constructor(private catService: CatsService, private dogService: DogsService) { }

  ngOnInit() {
    this.listenForDogWoofing();
  }

  listenForDogWoofing() {
    this.dogSubscriber = this.dogService.dogSayWoof.subscribe((index: number) => {
      this.dogIndex = index;
      this.displayScaryCatText = `Oh no! Dog #[${index}] is woofing!`;
      this.addCssClass = true;
      this.clearTextAfter(3000);
    });
  }

  clearTextAfter(timeout: number) {
    setTimeout(() => {
      this.displayScaryCatText = '';
      this.addCssClass = false;
    }, timeout);
  }

  onMeowClick() {
    this.catService.catSayMeow.next(this.catIndex);
  }

  ngOnDestroy(): void {
    this.dogSubscriber.unsubscribe();
  }

}
