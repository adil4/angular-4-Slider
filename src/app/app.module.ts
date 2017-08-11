import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SliderService } from './slider.service' 

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [SliderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
