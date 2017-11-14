import {Component, ViewEncapsulation} from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'alerts-renderer',
    template: `<alerts-module [ai]="alertsData"></alerts-module>`
})
// tslint:disable-next-line:component-class-suffix
export class AlertsRenderer {
    private params: any;

    alertsData: Array<{icon: string, message: string}> ;

    // called on init
    agInit(params: any): void {
        console.log(params.data.alerts) ;

        this.alertsData = this.getAlertsData() ;

    }

    private getAlertsData() {
        const r = Math.floor(Math.random() * 6) + 1;
        const ad = [
                  {'message': 'ASDOFJO ASD JFOAS FOASFD J',
                   'icon': 'http://wfarm1.dataknet.com/static/resources/icons/set95/5076c9d9.png'},
                  {'message': '304ODA FO ASOFD AOIDJ IOJSFDOASD F',
                   'icon': 'https://cdn2.iconfinder.com/data/icons/domestic-and-commercial-cleaning-icon-set/128/small_broom2__.png'},
                  {'message': 'ASDFOJ OA SDJFOI ASODF ASDF',
                   'icon': 'http://icons.iconarchive.com/icons/froyoshark/enkel/128/Telegram-icon.png'},
                  {'message': 'ZSDFJA ASNDFO OASF OASD FOASD F',
                   'icon': 'https://cdn4.iconfinder.com/data/icons/small-n-flat/24/heart-128.png'},
                  {'message': 'doiq A SDFOJO ASDFOAOSDF OAS DFOA SFOD ASDF',
                   'icon': 'http://findicons.com/files/icons/343/fruits/128/banana.png'},
                  {'message': 'FFF',
                   'icon': 'https://www.shareicon.net/data/128x128/2017/07/13/888379_business_512x512.png'}
         ] ;

         const m = [] ;
         for (let i = 0; i < r; i++) {
           m.push(ad[Math.floor(Math.random() * 6)]) ;
         }

         return m ;
    }
}
