const deviceSpectLocal = require('../source/DeviceSpectLocal');
const key = require('../../../config/local/Keys');

module.exports = class deviceSpectSourceLocal {
  static instance;
  constructor () {
    if (deviceSpectSourceLocal.instance) {
      return deviceSpectSourceLocal.instance
    } else {
        deviceSpectSourceLocal.instance = this
    }
  }
  CreateDeviceSpectInStorage(data){
    return  deviceSpectLocal.CreateDeviceSpectInStorage(key.TYPE.N_DEVICE_INFO,data);
  }
  GetDeviceSpectInStorage(){
    return deviceSpectLocal.GetDeviceSpectInStorage(key.TYPE.N_DEVICE_INFO);
  }

} 