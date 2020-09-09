import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { InfoMovieComponent } from './components/info-movie/info-movie.component';
import { InfoShipComponent } from './components/info-ship/info-ship.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    InfoMovieComponent,
    InfoShipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
