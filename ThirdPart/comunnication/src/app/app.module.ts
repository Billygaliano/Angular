import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FatherComponent } from './father/father.component';
import { SonComponent } from './son/son.component';

@NgModule({
  declarations: [
    AppComponent,
    FatherComponent,
    SonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
