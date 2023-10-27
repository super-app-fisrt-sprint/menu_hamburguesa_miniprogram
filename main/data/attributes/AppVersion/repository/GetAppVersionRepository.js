const GetAppVersionListDataSourceRemote = require("../dataSource/GetAppVersionDataSourceRemote");
const getAppVersionListDataSourceRemote = new GetAppVersionListDataSourceRemote();

/**
 * Representa una clase Singleton para recuperar la lista de versiones de la aplicación.
 * @clase
 * @name getAppVersionRepository
 * @ejemplo
 * const repository = new GetAppVersionRepository ();
 * const appverversionList = await Repository.getAppVersionList (DevicesPec, Data);
 */
module.exports = class GetAppVersionRepository {
  static instance;
  constructor () {
    if (GetAppVersionRepository.instance) {
      return GetAppVersionRepository.instance;
    } else {
      GetAppVersionRepository.instance = this;
    }
  }

  /**
   * Recupera la lista de versiones de la aplicación.
   * @async
   * @function
   * @name getAppVersionList
   * @param {any} deviceSpec - La especificación del dispositivo.
   * @param {any} data - Datos adicionales.
   * @returns {any} El resultado de llamar al método GetAppVersionList del objeto GetAppPersionListDataSourCeremote.
   */
  async getAppVersionList (deviceSpect, data) {
    return await getAppVersionListDataSourceRemote.getAppVersionList(
      deviceSpect,
      data
    );
  }
};
