const BannerListDataSourceRemote = require("../dataSource/BannerListServiceDataSourceRemote");
const BannerListDatasourceRemote = new BannerListDataSourceRemote();

/**
 * Representa un repositorio para recuperar listas de banner de forma remota.
 * @module bannerListRepository
 */
module.exports = class BannerListRepository {
  static instance;

  /**
   * Crea una instancia de bannerListRpository.
   * Implementa el patrón de diseño Singleton para garantizar que solo se cree una instancia de la clase.
   * @constructor
   * @returns {bannerListRepository} La instancia de la clase BannerListRepository.
   */
  constructor () {
    if (BannerListRepository.instance) {
      return BannerListRepository.instance;
    } else {
      BannerListRepository.instance = this;
    }
  }

  /**
   * Recupera las listas de banner de forma remota utilizando la especificación de dispositivo proporcionada.
   * @async
   * @param {object} Devicespect: la especificación del dispositivo utilizada para obtener las listas de banner de forma remota.
   * @returns {Promise | Array } Una promesa que se resuelve a las listas de banner recuperadas.
   */
  async getBannerListRemote (deviceSpect) {
    return await BannerListDatasourceRemote.GetBannerLists(deviceSpect);
  }
};
