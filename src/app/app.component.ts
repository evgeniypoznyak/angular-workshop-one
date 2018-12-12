import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  catsIsMeowing(index) {
    console.log('APP COMPONENT CAT INDEX: ', index);
  }

  dogsIsWoofing(index) {
    console.log('APP COMPONENT DOG INDEX: ', index);
  }
}
