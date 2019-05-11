import { Component, OnInit } from '@angular/core';
import {DeviceServices} from '../services/device.services';

@Component({
  selector: 'app-device-view',
  templateUrl: './device-view.component.html',
  styleUrls: ['./device-view.component.scss']
})
export class DeviceViewComponent implements OnInit {

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
      }, 1000
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
    if (confirm('Etes-vous sûr de voiloir éteindre tous vos appareils ?')) {
      this.deviceServices.switchOffAll();
    } else {
      return null;
    }
  }

  onPrevent() {
    if (confirm('Etes-vous sûr de vouloir mettre en attente tous vos appareils ?')) {
      this.deviceServices.switchPreventAll();
    } else {
      return null;
    }
  }
  /*onTest() {
    alert('Attention !');
  }*/

}
