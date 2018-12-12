import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.scss']
})
export class DogComponent implements OnInit {
  @Input() dogImage: string;
  @Input() dogIndex: number;
  @Output() dogSayWoof: EventEmitter<number> = new EventEmitter();
  @Input() iKnowWhichCatIsMeowing: EventEmitter<any> = new EventEmitter();
  displayAngryDogText: string;
  addCssClass = false;

  constructor() { }

  ngOnInit() {
    this.listenForCatMeowing();
  }

  listenForCatMeowing() {
    this.iKnowWhichCatIsMeowing.subscribe((index) => {
      this.displayAngryDogText = `Woof! This cat is meowing! [${index}]`;
      this.addCssClass = true;
      this.clearTextAfter(3000);
    });
  }

  clearTextAfter(timeout: number) {
    setTimeout( () => {
      this.displayAngryDogText = '';
      this.addCssClass = false;
    }, timeout);
  }

  onDogWoofClick(index) {
    console.log('WOOF');
    this.dogSayWoof.emit(index);
  }

}
