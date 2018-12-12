import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @Output() notifyDogsAboutCatMeowing: EventEmitter<any> = new EventEmitter();
  @Output() notifyCatsAboutDogsWoofing: EventEmitter<number> = new EventEmitter();

  catsIsMeowing(index) {
    this.notifyDogsAboutCatMeowing.emit(index);
  }

  dogsIsWoofing(index: number) {
    this.notifyCatsAboutDogsWoofing.emit(index);
  }

}
