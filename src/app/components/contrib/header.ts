import { Component } from '@angular/core';
import { PageScrollConfig } from 'ngx-page-scroll';

@Component({
	selector: 'header',
	templateUrl: 'header.html'
})
export class HeaderComponent {
  constructor() {
    PageScrollConfig.defaultEasingLogic = {
        ease: (t: number, b: number, c: number, d: number): number => {
            // easeInOutExpo easing
            if (t === 0) return b;
            if (t === d) return b + c;
            if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
            return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
        }
    };
  }
}