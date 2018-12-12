import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DogsService {
  dogSayWoof = new Subject<number>();

  constructor() { }
}
