/**
 * Representa una especificación de dispositivo.
 * @class
 * @constructor
 * @param {object} data - Un objeto que contiene varias propiedades con sus valores correspondientes.
 * @property {string} X-SESSION-ID - La identificación de la sesión.
 * @property {string} X-MC-LINE - La línea.
 * @property {string} X-MC-LOB - El LOB.
 * @property {string} Content-Type - El tipo de contenido.
 * @property {string} X-MC-MAIL - El correo.
 * @property {string} X-Carrier - El portador.
 * @property {string} X-Wifi - El wifi.
 * @property {string} X-MC-HE-V - La versión he.
 * @property {string} X-MC-SO-V - La versión SO.
 * @property {string} Cache-Control - El control de caché.
 * @property {string} X-MC-SO-API - La API SO.
 * @property {string} X-MC-SO-PHONE-F - El teléfono SO F.
 * @property {string} X-MC-SO-PHONE-M - El Teléfono So M.
 * @property {string} X-MC-APP-V - La versión de la aplicación.
 * @property {string} X-MC-DEVICE-NAME - El nombre del dispositivo.
 * @property {string} X-MC-DEVICE-ID - La identificación del dispositivo.
 * @property {string} X-MC-USER-AGENT - El agente de usuario.
 */
module.exports = class deviceSpect {
  constructor (data) {
    this['X-SESSION-ID'] = data['X-SESSION-ID'];
    this['X-MC-LINE'] = data['X-MC-LINE'];
    this['X-MC-LOB'] = data['X-MC-LOB'];
    this['Content-Type'] = data['Content-Type'];
    this['X-MC-MAIL'] = data['X-MC-MAIL'];
    this['X-Carrier'] = data['X-Carrier'];
    this['X-Wifi'] = data['X-Wifi'];
    this['X-MC-HE-V'] = data['X-MC-HE-V'];
    this['X-MC-SO-V'] = data['X-MC-SO-V'];
    this['Cache-Control'] = data['Cache-Control'];
    this['X-MC-SO-API'] = data['X-MC-SO-API'];
    this['X-MC-SO-PHONE-F'] = data['X-MC-SO-PHONE-F'];
    this['X-MC-SO-PHONE-M'] = data['X-MC-SO-PHONE-M'];
    this['X-MC-APP-V'] = data['X-MC-APP-V'];
    this['X-MC-DEVICE-NAME'] = data['X-MC-DEVICE-NAME'];
    this['X-MC-DEVICE-ID'] = data['X-MC-DEVICE-ID'];
    this['X-MC-USER-AGENT'] = data['X-MC-USER-AGENT'];
  }
};
