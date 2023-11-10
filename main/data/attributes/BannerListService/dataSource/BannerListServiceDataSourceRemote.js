const BannerListRemote = require("../source/bannerListServiceRemote");
const api = require("../../../config/remote/APIs");

/**
 * Una clase que sirve como fuente de datos para recuperar las listas de banner de forma remota.
 * @class
 * @module BannerListDataSourceRemote
 */
module.exports = class BannerListDataSourceRemote {
  static instance;

  /**
   * Crea una instancia de BannerListDataSourceremote.
   * Implementa el patrón Singleton para garantizar que solo se cree una instancia.
   * @constructor
   * @returns {bannerListDataSourCeremote} La instancia de Singleton de BannerListDataSourCeremote.
   */
  constructor() {
    if (BannerListDataSourceRemote.instance) {
      return BannerListDataSourceRemote.instance;
    } else {
      BannerListDataSourceRemote.instance = this;
    }
  }

  /**
   * Recupera el banner enumera asincrónicamente.
   * @async
   * @param {object} Devicespect: la especificación del dispositivo utilizada para recuperar las listas de banner.
   * @returns {Promise | Array } Una promesa que se resuelve a las listas de banner recuperadas.
   */
  async GetBannerLists(deviceSpect) {
    return await BannerListRemote.requestbannerList(api.URL_BASE.URL_API_BANNERS, deviceSpect);
  }
};
