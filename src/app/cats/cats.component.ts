import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.sass']
})
export class CatsComponent implements OnInit {
  catImages: string[] = [
    'https://media.mnn.com/assets/images/2018/07/cat_eating_fancy_ice_cream.jpg.838x0_q80.jpg',
    'https://i.ytimg.com/vi/lrvqjdMcjjQ/hqdefault.jpg',
    'http://honesttopaws.com/wp-content/uploads/sites/5/2017/05/banana-cat-1.png',
    'https://static.boredpanda.com/blog/wp-content/uploads/2018/04/han' +
    'dicapped-cat-rexie-the-handicat-dasha-minaeva-58-5acb4f1931e1b__700.jpg',
  ];

  constructor() { }

  ngOnInit() {
  }

}
