/**
 * Una clase que representa el AutorefreshRepository.
 * @module AutoRefreshRepository
 */
const AutoRefreshDataSourceRemote = require("../dataSource/AutoRefreshDataSourceRemote");
const autoRefreshDataSourceRemote = new AutoRefreshDataSourceRemote();

module.exports = class AutoRefreshRepository {
  static instance;

  /**
   * Crea una instancia de AutorefreshRepository.
   * Si ya existe una instancia, devuelve esa instancia.
   * De lo contrario, asigna la instancia actual a la propiedad de instancia.
   * @constructor
   */
  constructor () {
    if (AutoRefreshRepository.instance) {
      return AutoRefreshRepository.instance;
    } else {
      AutoRefreshRepository.instance = this;
    }
  }

  /**
   *Llama al método de actualización automática de la instancia remota de AutoreFresh DataSource con el parámetro Devicespect.
   * @async
   * @param {Object} deviceSpect - Un objeto que representa las especificaciones del dispositivo.
   * @returns {Promise} Una promesa que se resuelve con el resultado del método Autorefresh.
   */
  async autoRefresh (deviceSpect) {
    return await autoRefreshDataSourceRemote.autoRefresh(deviceSpect);
  }

  /**
   * Llama al método ChangeHeadEstorage de la instancia AutorefreshDataSourCeremote con los parámetros de encabezado y datos.
   * @param {any} header - El encabezado se utilizará en el método.
   * @param {any} data -Los datos que se utilizarán en el método.
   * @returns {any} El resultado del método ChangeHeadEstorage.
   */
  changeHeaderLocal (header, data) {
    return autoRefreshDataSourceRemote.changeHeaderStorage(header, data);
  }
};
