import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { HeroComponent } from './heros/hero/hero.component';
import { ListComponent } from './heros/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    HeroComponent,
    ListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
