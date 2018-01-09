import { AppRoutingModule } from './app.routing';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { ApplicationComponent } from './components/application';
import { MainComponent } from './components/container/main';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  declarations: [
    ApplicationComponent,
    MainComponent
  ],
  providers: [],
  bootstrap: [ApplicationComponent]
})
export class AppModule { }
