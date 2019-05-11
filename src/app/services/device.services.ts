export class DeviceServices {
  devices = [
    {
      name: "Télévision",
      status: 'allumé'
    },
    {
      name: "Machine à laver",
      status: 'allumé'
    },
    {
      name: "Ordinateur MSI",
      status: 'allumé'
    },
    {
      name: "PS4",
      status: 'prévision'
    },
    {
      name: "Wii",
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
