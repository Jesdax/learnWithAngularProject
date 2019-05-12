import {Component, OnInit} from '@angular/core';
import { Observable} from 'rxjs-compat/Observable';
import 'rxjs-compat/add/observable/interval';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  secondes: number;

  constructor() {}

  ngOnInit(): void {
    const counter = Observable.interval(1000);
    counter.subscribe(
      (value) => {
        this.secondes = value;
      },
      (error) => {
        console.log('Une erreur est apparu !');
      },
      () => {
        console.log('Un Observable est complété !');
      }
    );
  }
}
