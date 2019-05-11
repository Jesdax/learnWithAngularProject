export class DeviceServices {
  devices = [
    {
      name: "Samsung s10+",
      status: 'allumé'
    },
    {
      name: "Huawei p30 pro",
      status: 'allumé'
    },
    {
      name: "Iphone XS",
      status: 'allumé'
    },
    {
      name: "Nokia",
      status: 'prévision'
    },
    {
      name: "Google phone",
      status: 'éteint'
    },
  ];

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

  switchOnOne(index: number) {
    this.devices[index].status = 'allumé';
  }
  switchOffOne(index: number) {
    this.devices[index].status = 'éteint';
  }

}
