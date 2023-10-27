const DeviceSpectSourceLocal = require("../datasource/DeviceSpectDataSourceLocal");
const deviceSpectSourceLocal = new DeviceSpectSourceLocal();

/**
 * Una clase que implementa el patrón de diseño Singleton para crear y recuperar datos de Spect de un almacenamiento local.
 * @module deviceSpectRepository
 */
module.exports = class deviceSpectRepository {
  static instance;
  /**
   * Crea una instancia de DevicesPectrepository.
   * Si ya existe una instancia, devuelve la instancia existente.
   * @constructor
   */
  constructor () {
    if (deviceSpectRepository.instance) {
      return deviceSpectRepository.instance;
    } else {
      deviceSpectRepository.instance = this;
    }
  }

  /**
   * Llama al método createdEvicespectInStorage del objeto DevicesSpectSeurCelocal, pasando el parámetro de datos.
   *@param {object} data - El dispositivo spect Data que se almacenarán en el almacenamiento local.
   * @returns {any} - El resultado del Metho de creación EvicsPectinStoraged.
   */
  CreateDeviceSpectSourceLocal (data) {
    return deviceSpectSourceLocal.CreateDeviceSpectInStorage(data);
  }

  /**
   * Llama al método GetDevicespectInStorage del objeto DevicesSpectSeurcelocal.
   * @returns {any} - El resultado del método GetDevicespectInStorage.
   */
  GetDeviceSpectSourceLocal () {
    return deviceSpectSourceLocal.GetDeviceSpectInStorage();
  }
};
