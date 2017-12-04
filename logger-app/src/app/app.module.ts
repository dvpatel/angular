import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http';

import { Options, Logger, Level } from 'angular2-logger/core';
import {LoggerService} from './service/logger.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [{ provide: Logger, useValue: { level: Level.LOG } }, Logger, LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
