import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NextHeaderModule } from 'next-header';

// import {SvgIconModule} from '../svg-icon/svg-icon.module';
// import {UserNameModule} from '../users/components/user-name/user-name.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NextHeaderModule
    // UserNameModule,
    // SvgIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
