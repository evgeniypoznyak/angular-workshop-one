import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatsComponent } from './cats/cats.component';
import { DogsComponent } from './dogs/dogs.component';
import { CatComponent } from './cats/cat/cat.component';
import { DogComponent } from './dogs/dog/dog.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './shared/app-store/app-reducers';
import { environment } from '../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    CatsComponent,
    DogsComponent,
    CatComponent,
    DogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    !environment.production ? StoreDevtoolsModule.instrument(): [], // After StoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
