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
  constructor() { }

  ngOnInit() {
  }

  onDogWoofClick(index) {
    console.log('WOOF');
    this.dogSayWoof.emit(index);
  }

}
