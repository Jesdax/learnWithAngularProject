import {Component, OnInit} from '@angular/core';
import {DeviceServices} from './services/device.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  $isAuth = false;

  lastUpdate = new Promise(
    // tslint:disable-next-line:no-shadowed-variable
    (resolve) => {
        const date = new Date();
        setTimeout(
          () => {
            resolve(date);
          }, 2000
        );
      }
  );

  devices: any[];

  constructor(private deviceServices: DeviceServices) {
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
  ngOnInit(): void {
    this.devices = this.deviceServices.devices;
  }

  onAllumer() {
    this.deviceServices.switchOnAll();
  }

  onOff() {
    this.deviceServices.switchOffAll();
  }
  /*onTest() {
    alert('Attention !');
  }*/
}
