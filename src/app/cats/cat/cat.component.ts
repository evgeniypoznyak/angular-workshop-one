import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.scss']
})
export class CatComponent implements OnInit {
  @Input() catImage: string;
  @Input() catIndex: number;
  constructor() { }

  ngOnInit() {
  }

  onMeowClick(index) {
    console.log('MEOW');
    console.log(this.catIndex);
    console.log(index);
  }

}
