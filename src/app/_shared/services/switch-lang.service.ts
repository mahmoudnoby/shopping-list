import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SwitchLangService {
  SelectedLanguageKEY = 'SelectedLanguage';

  setCurrentLang(lang) {
    localStorage.setItem(this.SelectedLanguageKEY, lang);
  }

  getCurrentLang() {
    const selectedLang = localStorage[this.SelectedLanguageKEY];
    if( selectedLang == undefined ) {
      return 'en'
    }
    return selectedLang;
  }

  setArabicLanguageStyle() {
    this.LoadArabicCssFiles('arabic-style-a', 'assets/theme/css/bootstrap.min.rtl.css');
    this.LoadArabicCssFiles('arabic-style-b', 'assets/theme/css/custom.css');
  }

  LoadArabicCssFiles(cssId, url) {
    if (!document.getElementById(cssId)) {
      const head = document.getElementsByTagName('head')[0];
      const link = document.createElement('link');
      link.id = cssId;
      link.rel = 'stylesheet';
      link.type = 'text/css';
      link.href = url;
      link.media = 'all';
      head.appendChild(link);
    }
  }

  removeArabicStyle() {
    if (document.getElementById('arabic-style-a')) {
        document.getElementById('arabic-style-a').remove();
    }
    if (document.getElementById('arabic-style-b')) {
        document.getElementById('arabic-style-b').remove();
    }
    if (document.getElementById('ar')) {
        document.getElementById('ar').remove();
    }
  }

  constructor() { }
}
