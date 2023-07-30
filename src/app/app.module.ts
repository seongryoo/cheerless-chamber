import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameViewComponent } from './components/game-view/game-view.component';
import { GameTitleComponent } from './components/game-title/game-title.component';

@NgModule({
  declarations: [
    AppComponent,
    GameViewComponent,
    GameTitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
