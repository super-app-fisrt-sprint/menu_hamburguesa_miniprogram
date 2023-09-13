/**
 * Un módulo que exporta una función llamada `ChangeHeaderLocal`.
 * Esta función recupera datos del almacenamiento, actualiza un encabezado específico en los datos recuperados y almacena los datos actualizados de nuevo en el almacenamiento.
 * @module changeHeaderLocal
 * @param {string} key - La clave utilizada para recuperar y almacenar datos en almacenamiento.
 * @param {string} header - La propiedad del encabezado se actualizará en los datos recuperados.
 * @param {*} data - El nuevo valor que se asignará a la propiedad de encabezado especificada.
 * @returns {boolean} - Devuelve `True` Si la operación de almacenamiento es exitosa,` falso 'si se produce un error.
 */
module.exports.changeHeaderLocal = changeHeaderLocal;

function changeHeaderLocal (key, header, data) {
  try {
    const deviceSpec = my.getStorageSync({ key }).data || {};

    deviceSpec[header] = data;

    my.setStorageSync({
      key,
      data: deviceSpec
    });
    return deviceSpec;
  } catch (error) {
    return false;
  }
}
