const deviceSpectLocal = require('../source/DeviceSpectLocal');
const key = require('../../../config/local/Keys');

/**
 * Una clase que implementa el patrón de diseño Singleton para crear y recuperar datos SPECT del almacenamiento.
 * @class
 * @module deviceSpectSourceLocal
 */
module.exports = class deviceSpectSourceLocal {
  static instance;
  constructor () {
    if (deviceSpectSourceLocal.instance) {
      return deviceSpectSourceLocal.instance
    } else {
      deviceSpectSourceLocal.instance = this
    }
  }

  /**
   * Crea datos de SPECT de dispositivo en almacenamiento.
   * @param {object} data -El dispositivo Spect Data que se almacenarán en el almacenamiento.
   * @returns {any} - El resultado del método CreatedEvicespectInStorage del módulo DevicespectLocal.
   */
  CreateDeviceSpectInStorage (data) {
    return deviceSpectLocal.CreateDeviceSpectInStorage(key.TYPE.N_DEVICE_INFO, data);
  }

  /**
   * Recupera los datos SPECT del dispositivo del almacenamiento.
   * @returns {any} -El resultado del método GetDevicesSpectInStorage del módulo DevicespectLocal.
   */
  GetDeviceSpectInStorage () {
    return deviceSpectLocal.GetDeviceSpectInStorage(key.TYPE.N_DEVICE_INFO);
  }
}
