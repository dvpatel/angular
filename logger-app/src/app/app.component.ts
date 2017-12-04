import { Component } from '@angular/core';
import {LoggerService} from './service/logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private logger: LoggerService) {
    this.logger.warn('Warn AppComponent..') ;
    this.logger.log('Log AppComponent..') ;
    this.logger.debug('Debug AppComponent..') ;
    this.logger.error('Error AppComponent..') ;
    this.logger.info('Info AppComponent..') ;
  }

}
