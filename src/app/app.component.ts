import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  $isAuth = false;

  deviceOne = 'Machine à laver';
  deviceTwo = 'Télévision';
  devicethree = 'Ordinateur';

  constructor() {
    setTimeout(
      () => {
        this.$isAuth = true;
      }, 4000
    );
  }
  onAllumer() {
    console.log('Tout est allumer !');
  }
}
