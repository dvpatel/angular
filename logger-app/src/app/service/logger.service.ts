import { Injectable, NgZone } from '@angular/core';
import { Logger, Level } from 'angular2-logger/core';
import {HttpClient} from '@angular/common/http';
// tslint:disable-next-line:import-blacklist
import { Observable, Subscription } from 'rxjs/Rx';

class Log {
  public level: string ;
  public message: string;
  public usreId: string ;
  public time: string ;
  public appname: string;
}

@Injectable()
export class LoggerService {

  private timerSub: any ;
  private logs: Array<Log> = new Array<Log>();

  constructor(private ngZone: NgZone, private logger: Logger, private http: HttpClient) {

    //  use ngzone to catch and log all unhandled exceptions ;
    this.ngZone.onError.subscribe(e => {
      this.error(e.message) ;
    });
    
  }

  log(message: string) {
    this.logToServer(this.getLog('Cloning-UI', message, 'LOG', 'now', 'a123456')) ;
  }

  debug(message: string) {
    this.logToServer(this.getLog('Cloning-UI', message, 'DEBUG', 'now', 'a123456')) ;
  }

  info(message: string) {
    this.logToServer(this.getLog('Cloning-UI', message, 'INFO', 'now', 'a123456')) ;
  }

  warn(message: string) {
    this.logToServer(this.getLog('Cloning-UI', message, 'WARN', 'now', 'a123456')) ;
  }

  error(message: string) {
    this.logToServer(this.getLog('Cloning-UI', message, 'ERROR', 'now', 'a123456')) ;
  }

  private getLog(appname: string, message: string, level: string, time: string, userid: string): Log {

    const lm = new Log() ;
    lm.appname = appname ;
    lm.message = message ;
    lm.level = level ;
    lm.time = time ;
    lm.usreId = userid ;

    return lm ;

  }
  private logToServer(model: Log): void {

    this.logs.push(model) ;

    if (this.timerSub) {
      this.timerSub.unsubscribe();
    }

    this.timerSub = Observable.timer(2000).subscribe(x => {

        const clone = this.logs.splice(0, this.logs.length) ;
        this.logs = new Array<Log>() ;
        for (let i = 0; i < clone.length; i++ ) {
          this.logger.warn('AfterTime:  ' + JSON.stringify(clone[i]))  ;
        }

        //  Call XHR2
        //  if xhr is not available, then put messages back in logs ;

    }) ;
  }
}
