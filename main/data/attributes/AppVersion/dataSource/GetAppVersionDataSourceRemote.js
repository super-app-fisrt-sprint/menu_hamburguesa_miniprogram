const getAppVersionListSourceRemote = require("../source/GetAppVersion");
const api = require("../../../config/remote/APIs");

/**
 * Representa una fuente de datos para recuperar la lista de versiones de la aplicación.
 * Implementa el patrón de diseño Singleton.
 * @clase
 */
module.exports = class GetAppVersionListDataSource {
  static instance;

  /**
   * Crea una instancia de GetAppververSionListDataSource.
   * Si ya existe una instancia, devuelve la instancia existente.
   * De lo contrario, asigna esta instancia a la propiedad de instancia.
   * @constructor
   */
  constructor () {
    if (GetAppVersionListDataSource.instance) {
      return GetAppVersionListDataSource.instance;
    } else {
      GetAppVersionListDataSource.instance = this;
    }
  }

  /**
   * Recupera la lista de versiones de la aplicación.
   * @async
   * @param  Devicespect - La especificación del dispositivo.
   * @param  datos - datos adicionales.
   * @returns  - El resultado de llamar al método GetAppVersionList desde el módulo GetAppPersionListSourCereMote.
   */
  async getAppVersionList (deviceSpect, data) {
    return await getAppVersionListSourceRemote.getAppVersionList(
      api.URL_BASE.URL_API_GET_VERSION_APP,
      deviceSpect,
      data
    );
  }
};
