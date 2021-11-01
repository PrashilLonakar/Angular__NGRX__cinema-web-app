import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';

import { DataService } from './Service/data.service';
import { InMemoryService } from './Service/in-memory.service';

import { MaterialModules } from './app.material.module';
import { FormsModule } from '@angular/forms';

import { environment } from '../environments/environment';
import { movieReducer } from './Store/Reducers/movie.reducer';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { MovieEffects } from './Store/Effects/movie.effect';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,  
    MaterialModules,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryService),
    EffectsModule.forRoot([MovieEffects]),
    StoreModule.forRoot({ movies: movieReducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
