import { Component } from '@angular/core';
import { Ng4TwitterTimelineService } from 'ng4-twitter-timeline/lib/index';

@Component({
  selector: 'notice',
  templateUrl: 'notice.html'
})
export class NoticeComponent { 
  constructor(private ng4TwitterTimelineService: Ng4TwitterTimelineService) {
  
  }
}