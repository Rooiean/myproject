import { AppRoutingModule } from './app.routing';
import { MaterialModule } from './material.module';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { ApplicationComponent } from './components/application';
import { HeaderComponent } from './components/contrib/header';
import { MainComponent } from './components/container/main';
import { NoticeComponent } from './components/container/notice';

import { NgxPageScrollModule } from 'ngx-page-scroll';
import { Ng4TwitterTimelineModule } from 'ng4-twitter-timeline/lib/index';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    NgxPageScrollModule,
    Ng4TwitterTimelineModule
  ],
  declarations: [
    ApplicationComponent,
    HeaderComponent,
    MainComponent,
    NoticeComponent
  ],
  providers: [],
  bootstrap: [ApplicationComponent]
})
export class AppModule { }
