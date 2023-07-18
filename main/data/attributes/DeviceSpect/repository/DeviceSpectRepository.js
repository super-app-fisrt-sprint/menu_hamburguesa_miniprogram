const DeviceSpectSourceLocal = require("../datasource/DeviceSpectDataSourceLocal");
const  deviceSpectSourceLocal = new DeviceSpectSourceLocal();

module.exports = class deviceSpectRepository {
  static instance;
  constructor() {
    if (deviceSpectRepository.instance) {
      return deviceSpectRepository.instance;
    } else {
      deviceSpectRepository.instance = this;
    }
  }
  CreateDeviceSpectSourceLocal(data) {
    return  deviceSpectSourceLocal.CreateDeviceSpectInStorage(data);
  }
   GetDeviceSpectSourceLocal() {
    return  deviceSpectSourceLocal.GetDeviceSpectInStorage();
  }
  
};