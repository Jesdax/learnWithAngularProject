import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit {

  @Input() deviceName: string;
  @Input() deviceStatus: string;

  constructor() { }

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
    }
  }
}
