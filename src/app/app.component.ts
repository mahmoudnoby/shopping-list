import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SwitchLangService } from './_shared/services/switch-lang.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  arabicLang= false;
  constructor(
    private translate: TranslateService,
    private switchLang: SwitchLangService
    ) {
      
    translate.setDefaultLang('en');
    translate.use(switchLang.getCurrentLang());
    if(switchLang.getCurrentLang() == 'ar') {
      this.switchLang.setArabicLanguageStyle();
      this.arabicLang = true;
    }else{
      this.switchLang.removeArabicStyle();
      this.arabicLang = false;
    }
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.translate.setDefaultLang('en')

  }
  navigateEle: string = 'home';
  onNavigate(feature:string) {
    this.navigateEle = feature;
  }



















  // serverElements = [
  //   {
  //     type: 'server',
  //     name: 'test',
  //     content: "test content sds"
  //   },
  //   {
  //     type: 'blueprint',
  //     name: 'A New blueprint Server ',
  //     content: "Server Descriptions "
  //   },
  // ]
  
  // onServerAdded(serverData: {serverName:string, serverContent:string}){
  //   this.serverElements.push({
  //     type: 'server',
  //     name: serverData.serverName,
  //     content: serverData.serverContent
  //   })
  // }

  // onBluePrintAdded(bluePrintData: {serverName:string, serverContent:string}){
  //   this.serverElements.push({
  //     type: 'blueprint',
  //     name: bluePrintData.serverName,
  //     content: bluePrintData.serverContent
  //   })
  // }
}
