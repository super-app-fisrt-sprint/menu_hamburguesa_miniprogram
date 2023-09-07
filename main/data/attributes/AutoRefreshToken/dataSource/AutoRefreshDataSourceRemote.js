const autoRefreshSourceRemote = require("../source/AutoRefreshTokenService");
const changeHeaderLocal = require("../source/ChangeHeaderLocal");
const api = require("../../../config/remote/APIs");
const key = require("../../../config/local/Keys");

/**
 * Representa una clase que proporciona funcionalidad automática para una fuente de datos.
 * @class
 */
module.exports = class AutoRefreshDataSource {
  static instance;

  /**
   * Crea una instancia de AutorefreshDataSource.
   * Si ya existe una instancia, devuelve la instancia existente.
   * @constructor
   */
  constructor () {
    if (AutoRefreshDataSource.instance) {
      return AutoRefreshDataSource.instance;
    } else {
      AutoRefreshDataSource.instance = this;
    }
  }

  /**
   *Realiza una operación automática de reflexión utilizando una fuente de datos remoto.
   * @param {Object} deviceSpect - Las especificaciones del dispositivo.
   * @returns {Promise} Una promesa que se resuelve con el resultado de la función de actualización automática desde el módulo remoto de la fuente de actualización automática.
   */
  async autoRefresh (deviceSpect) {
    return await autoRefreshSourceRemote.autoRefresh(api.URL_BASE.URL_AUTO_REFRESH, deviceSpect);
  }

  /**
   * Cambia la información del encabezado y almacena los datos actualizados localmente.
   * @param {Object} header - La información del encabezado.
   * @param {Object} data - Los datos a almacenar.
   * @returns {Object} El resultado de la función ChangeHeaderLocal del módulo ChangeHeaderLocal.
   */
  changeHeaderStorage (header, data) {
    return changeHeaderLocal.changeHeaderLocal(key.TYPE.N_DEVICE_INFO, header, data);
  }
};
