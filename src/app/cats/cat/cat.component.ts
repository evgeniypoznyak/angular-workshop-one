import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.scss']
})
export class CatComponent implements OnInit {
  @Input() catImage: string;
  @Input() catIndex: number;
  @Output() catSayMeow: EventEmitter<number> = new EventEmitter();
  @Input() iKnowWhichDogIsWoofing: EventEmitter<number> = new EventEmitter();
  displayScaryCatText: string;
  addCssClass = false;
  dogIndex: number;

  constructor() { }

  ngOnInit() {
    this.listenForDogWoofing();
  }

  listenForDogWoofing() {
    this.iKnowWhichDogIsWoofing.subscribe((index: number) => {
      this.dogIndex = index;
      this.displayScaryCatText = `Oh no! Dog #[${index}] is woofing!`;
      this.addCssClass = true;
      this.clearTextAfter(3000);
    });
  }

  clearTextAfter(timeout: number) {
    setTimeout( () => {
      this.displayScaryCatText = '';
      this.addCssClass = false;
    }, timeout);
  }

  onMeowClick(index) {
    console.log('MEOW');
    this.catSayMeow.emit(this.catIndex);
  }

}
