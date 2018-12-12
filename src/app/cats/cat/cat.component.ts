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

  constructor() { }

  ngOnInit() {
  }

  onMeowClick(index) {
    console.log('MEOW');
    this.catSayMeow.emit(this.catIndex);
  }

}
