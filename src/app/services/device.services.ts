export class DeviceServices {
  devices = [
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
  }

  switchOffAll() {
    for (let device of this.devices) {
      device.status = 'éteint';
    }
  }

  switchPreventAll() {
    for (let device of this.devices) {
      device.status = 'en attente';
    }
  }

  switchOnOne(index: number) {
    this.devices[index].status = 'allumé';
  }
  switchOffOne(index: number) {
    this.devices[index].status = 'éteint';
  }
  switchPreventOne(index: number) {
    this.devices[index].status = 'en attente';
  }
}
