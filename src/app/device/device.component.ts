import {Component, Input, OnInit} from '@angular/core';
import {DeviceServices} from '../services/device.services';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit {

  @Input() deviceName: string;
  @Input() deviceStatus: string;
  @Input() indexOfDevice: number;

  constructor(private deviceServices: DeviceServices) { }

  ngOnInit() {
  }

  getStatus() {
    return this.deviceStatus;
  }

  getColor() {
    if (this.deviceStatus === 'allumé') {
      return 'green';
    } else if (this.deviceStatus === 'éteint') {
      return 'red';
    } else if (this.deviceStatus === 'prévision') {
      return 'orange';
    }
  }

  onSwitchOn() {
    this.deviceServices.switchOnOne(this.indexOfDevice);
  }

  onSwitchOff() {
    this.deviceServices.switchOffOne(this.indexOfDevice);
  }
}
