import { Component, Input, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'alerts-module',
  templateUrl: './alerts.module.html',
  styleUrls: ['./alerts.module.css']
})
// tslint:disable-next-line:component-class-suffix
export class AlertsModule implements OnInit {

  @Input()
  ai: Array<{icon: string, message: string}> ;

  constructor() {
  }

  ngOnInit() {
    //  console.log(this.ai) ;
  }

}
