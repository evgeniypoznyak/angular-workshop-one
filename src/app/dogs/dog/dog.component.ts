import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.scss']
})
export class DogComponent implements OnInit {
  @Input() dogImage: string;
  @Input() dogIndex: number;
  constructor() { }

  ngOnInit() {
  }

  onDogWoofClick(index) {
    console.log('WOOF');
    console.log(this.dogIndex);
    console.log(index);
  }

}
