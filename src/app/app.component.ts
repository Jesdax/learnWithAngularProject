import { Component } from '@angular/core';
import {reject} from 'q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  $isAuth = false;

  lastUpdate = new Promise(
    (resolve, reject) => {
        const date = new Date();
        setTimeout(
          () => {
            resolve(date);
          }, 2000
        );
      }
  );
  devices = [
    {
      name: "Machine à laver",
      status: 'allumé'
    },
    {
      name: "Machine à remonté dans le temps",
      status: 'allumé'
    },
    {
      name: "Télévision",
      status: 'éteint'
    },
    {
      name: "Iphone",
      status: 'prévision'
    },
  ];



  constructor() {
    setTimeout(
      () => {
        this.$isAuth = true;
      }, 4000
    );
    /*setTimeout(
      () => {
      this.$test = true;
      }, 2000
    );*/
  }
  onAllumer() {
    console.log('Tout est allumer !');
  }
  /*onTest() {
    alert('Attention !');
  }*/
}
