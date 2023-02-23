import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TimerComponent } from './components/timer.component';
import { TimerPageComponent } from './views/timer-page.component';

@NgModule({
  declarations: [
    AppComponent,
    TimerPageComponent,
    TimerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
