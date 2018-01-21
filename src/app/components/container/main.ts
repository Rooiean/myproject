import { Component } from '@angular/core';

declare var $:any;

@Component({
  selector: 'main',
  templateUrl: 'main.html'
})
export class MainComponent {

  ngAfterViewInit() {
    $('.full-box').css('min-height' , $(window).height());
    
    window.addEventListener("optimizedResize", function() {
      $('.full-box').css('min-height' , $(window).height());
    });
  }

  ngOnDestroy() {
    $('.full-box').css('min-height', 0);
  } 
}