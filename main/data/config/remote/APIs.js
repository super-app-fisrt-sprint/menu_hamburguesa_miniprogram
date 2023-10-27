/**
 * Representa un módulo que exporta una clase llamada 'API' y define un objeto constante llamado 'url_base'.
 * @module API
 */

/**
 * Representa la clase 'API'.
 * @clase
 */
module.exports = class APIs {
  /**
   * Obtiene el objeto 'url_base'.
   * @static
   * @returns {objeto} el objeto 'url_base'.
   */
  static get URL_BASE () {
    return URL_BASE;
  }
};

/**
*Representa el objeto 'url_base'.
 * @constant
 * @type {object}
 * @property {string} URL_API_GET_VERSION_APP -La URL para el punto final de la API 'VersionesApp'.
 * @property {string} URL_AUTO_REFRESH - La URL para el punto final de la API 'Authrefresh'.
 */
const URL_BASE = {
  URL_API_GET_VERSION_APP: "https://apiselfservice.co/api/index.php/v1/core/movil/VersionesApp.json",
  URL_AUTO_REFRESH: "https://apiselfservice.co/api/index.php/v2/soap/AuthRefresh.json"
};
