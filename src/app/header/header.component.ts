import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { SwitchLangService } from './../_shared/services/switch-lang.service';

@Component({
    selector: "app-header",
    templateUrl: './header.component.html'
})

export class HeaderComponent implements OnInit{
    isArabicLang = false;
    constructor(
        private translate: TranslateService,
        private switchLang: SwitchLangService,
        private router: Router) {

    }

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        if(localStorage.getItem('SelectedLanguage')=== 'ar') {
            this.isArabicLang = true;
        }else {
            this.isArabicLang = false;
        }
    }

    @Output() featuredClicked = new EventEmitter()
    onSelect(feature: string) {
        this.featuredClicked.emit(feature);
        console.log(feature)
    }

    changeCurrentLang() {
        if(this.translate.currentLang == 'en') {
            this.switchLang.setCurrentLang('ar');
        }else {
            this.switchLang.setCurrentLang('en');
        }
        window.location.href = this.router.url;
    }   

}