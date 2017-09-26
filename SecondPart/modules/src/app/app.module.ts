// Angular Modules needed
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Included components in our module
import { AppComponent } from './app.component';

@NgModule({
  // What module builds
  declarations: [
    AppComponent
  ],
  // What module needs
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
