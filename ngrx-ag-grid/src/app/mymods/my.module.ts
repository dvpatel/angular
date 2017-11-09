import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertsModule } from './alerts/alerts-module.module';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AlertsModule],
  exports: [AlertsModule]
})
export class MyModule { }
