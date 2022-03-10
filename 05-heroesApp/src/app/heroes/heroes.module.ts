import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeroesRoutingModule } from './heroes-routing.module';
import { MaterialModule } from '../material/material.module';

// Pipes
import { HeroImagePipe } from './pipes/hero-image.pipe';

// Components
import { AddComponent } from './pages/add/add.component';
import { SearchComponent } from './pages/search/search.component';
import { HeroComponent } from './pages/hero/hero.component';
import { HeroCardComponent } from './components/hero-card/hero-card.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';

@NgModule({
  declarations: [
    HeroImagePipe,
    AddComponent,
    SearchComponent,
    HeroComponent,
    HeroCardComponent,
    HomeComponent,
    ListComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    HeroesRoutingModule,
    MaterialModule,
  ],
})
export class HeroesModule {}