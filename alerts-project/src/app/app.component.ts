import { Component } from '@angular/core';
import { enableProdMode } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'alerts-sample';

  alerts: Array<{icon: string, message:string}> ;
  alerts2: Array<{icon: string, message:string}> ;
  alerts3: Array<{icon: string, message:string}> ;


  constructor() { 
    console.log("init alerts.") ;

    this.alerts = [
                  {"message":"ASDOFJO ASD JFOAS FOASFD J","icon":"http://wfarm1.dataknet.com/static/resources/icons/set95/5076c9d9.png"},
                  {"message":"304ODA FO ASOFD AOIDJ IOJSFDOASD F","icon":"https://cdn2.iconfinder.com/data/icons/domestic-and-commercial-cleaning-icon-set/128/small_broom2__.png"},
                  {"message":"ASDFOJ OA SDJFOI ASODF ASDF","icon":"http://icons.iconarchive.com/icons/froyoshark/enkel/128/Telegram-icon.png"},
                  {"message":"ZSDFJA ASNDFO OASF OASD FOASD F","icon":"https://cdn4.iconfinder.com/data/icons/small-n-flat/24/heart-128.png"},
                  {"message":"doiq A SDFOJO ASDFOAOSDF OAS DFOA SFOD ASDF","icon":"http://findicons.com/files/icons/343/fruits/128/banana.png"},
                  {"message":"FFF","icon":"https://www.shareicon.net/data/128x128/2017/07/13/888379_business_512x512.png"}
                 ] ;

    this.alerts2 = [
                  {"message":"394UJE0F9J 0JWFJ 0 X0WJF0JWE0","icon":"http://wfarm1.dataknet.com/static/resources/icons/set95/5076c9d9.png"},
                  {"message":"DSadsofjoa sfo aosdjfoasj dfoij osda fjoaijs dfo asdoif ","icon":"http://findicons.com/files/icons/343/fruits/128/banana.png"},
                  {"message":"2390OSDF ASIFJ OASJ FDOAJOS DFJOAS FAS DFNAFSANSFODN","icon":"https://www.shareicon.net/data/128x128/2017/07/13/888379_business_512x512.png"}
                 ] ;

    this.alerts3 = [
                  {"message":"JJJJJjjjJJJJJJJJJJJJJJJJJJJJJJJJ","icon":"http://wfarm1.dataknet.com/static/resources/icons/set95/5076c9d9.png"},
                  {"message":"KKKKKKKKKKKKKKKkkKKKKKKKKKKKKKKK","icon":"http://findicons.com/files/icons/343/fruits/128/banana.png"},
                  {"message":"LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL","icon":"https://www.shareicon.net/data/128x128/2017/07/13/888379_business_512x512.png"}
                 ] ;
    
  }

}
