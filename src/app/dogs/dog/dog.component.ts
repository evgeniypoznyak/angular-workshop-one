import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.sass']
})
export class DogComponent implements OnInit {
  @Input() dogImage: string;
  @Input() dogIndex: number;
  constructor() { }

  ngOnInit() {
  }

}
