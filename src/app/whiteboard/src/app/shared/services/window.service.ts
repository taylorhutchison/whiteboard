import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WindowService {

  size: BehaviorSubject<{ width: number, height: number }> = new BehaviorSubject({ width: 0, height: 0 });

  constructor() {
    window.addEventListener('resize', () => {
      const [width, height] = [window.innerWidth, window.innerHeight];
      this.size.next({ width, height });
    });
  }
}
