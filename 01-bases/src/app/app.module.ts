import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HerosModule } from './heros/heros.module';

import { AppComponent } from './app.component';
import { CounterModule } from './counter/counter.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HerosModule,
    CounterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
