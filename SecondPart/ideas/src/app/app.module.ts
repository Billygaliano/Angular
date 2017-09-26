import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListIdeasComponent } from './list-ideas/list-ideas.component';

@NgModule({
  declarations: [
    AppComponent,
    ListIdeasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
