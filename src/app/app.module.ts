import { AppRoutingModule } from './app.routing';
import { MaterialModule } from './material.module';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { ApplicationComponent } from './components/application';
import { HeaderComponent } from './components/contrib/header';
import { MainComponent } from './components/container/main';


import {NgxPageScrollModule} from 'ngx-page-scroll';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    NgxPageScrollModule
  ],
  declarations: [
    ApplicationComponent,
    HeaderComponent,
    MainComponent
  ],
  providers: [],
  bootstrap: [ApplicationComponent]
})
export class AppModule { }
