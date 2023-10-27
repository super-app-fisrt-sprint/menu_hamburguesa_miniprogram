/**
 * Representa una clase de versión.
 * @clase
 * @module versión
 */
module.exports = class Version {
  static instance;
  /**
   * Crea una instancia de la clase de versión.
   * @constructor
   * @param {String} versión: la versión del fragmento de código.
   * @param {String} PlatAforma - La plataforma del fragmento de código.
   */
  constructor (version, plataforma) {
    this.version = version;
    this.plataforma = plataforma;
  }

  /**
   * Actualiza los parámetros de la instancia de la versión.
   * @param {objeto} parámetros: los parámetros para actualizar.
   */
  updateParams (params) {
    Object.assign(this, params);
  }
};
