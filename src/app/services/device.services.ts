import {Subject} from 'rxjs';

export class DeviceServices {

  deviceSubject = new Subject<any[]>();

  private devices = [
    {
      id: 1,
      name: "Télévision",
      status: 'allumé'
    },
    {
      id: 2,
      name: "Machine à laver",
      status: 'allumé'
    },
    {
      id: 3,
      name: "Ordinateur MSI",
      status: 'allumé'
    }
  ];

  emitDeviceSubject() {
    this.deviceSubject.next(this.devices.slice());
  }

  getDeviceById(id: number) {
    return this.devices.find(
      (deviceObject) => {
        return deviceObject.id === id;
      }
    );
  }

  switchOnAll() {
    for (let device of this.devices) {
      device.status = 'allumé';
    }
    this.emitDeviceSubject();
  }

  switchOffAll() {
    for (let device of this.devices) {
      device.status = 'éteint';
    }
    this.emitDeviceSubject();
  }

  switchPreventAll() {
    for (let device of this.devices) {
      device.status = 'en attente';
    }
    this.emitDeviceSubject();
  }

  switchOnOne(index: number) {
    this.devices[index].status = 'allumé';
    this.emitDeviceSubject();
  }
  switchOffOne(index: number) {
    this.devices[index].status = 'éteint';
    this.emitDeviceSubject();
  }
  switchPreventOne(index: number) {
    this.devices[index].status = 'en attente';
    this.emitDeviceSubject();
  }

  addDevice(name: string, status: string) {
    const deviceObject = {
      id: 0,
      name: '',
      status: ''
    };
    deviceObject.name = name;
    deviceObject.status = status;
    deviceObject.id = this.devices[(this.devices.length - 1)].id + 1;

    this.devices.push(deviceObject);
    this.emitDeviceSubject();
  }
}
