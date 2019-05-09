import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  $isAuth = false;
  // $test = false;

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
    }
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
