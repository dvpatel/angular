import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'alerts-module',
  templateUrl: './alerts.module.html',
  styleUrls: ['./alerts.module.css']
})
export class AlertsModule implements OnInit {
  
  @Input()
  ai: Array<{icon: string, message:string}> ;

  constructor() { 
  }

  ngOnInit() {
    console.log(this.ai) ;
  }

}
