import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { InventoryListComponent } from './components/inventory-list/inventory-list.component';
import { TimerComponent } from './components/timer/timer.component';
import { TimerPageComponent } from './views/timer-page.component';

@NgModule({
  declarations: [
    AppComponent,
    TimerPageComponent,
    TimerComponent,
    InventoryListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
