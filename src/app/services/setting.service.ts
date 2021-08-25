import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  private urlLink = document.querySelector('#theme');

  constructor() {
    const tema: string = localStorage.getItem('theme') || './assets/css/colors/default-dark.css';
    this.urlLink?.setAttribute('href', tema);
  }

  changeTheme( theme: string ){
    const url = `./assets/css/colors/${ theme }.css`;
    this.urlLink?.setAttribute('href', url);
    localStorage.setItem('theme', url);
    this.checkCurrencyTheme();
  }

  checkCurrencyTheme(){

    const links= document.querySelectorAll(".selector");
    links.forEach( elem => {
      elem.classList.remove('working');
      const btnTheme = elem.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${ btnTheme }.css`;
      const currentTheme = this.urlLink?.getAttribute('href');

      if ( btnThemeUrl === currentTheme ){
        elem.classList.add('working');
      }
    })
  }
}
