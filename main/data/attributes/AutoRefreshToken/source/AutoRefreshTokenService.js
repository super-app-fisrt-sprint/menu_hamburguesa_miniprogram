/**
 * Funcionar para realizar una actualización automática realizando una solicitud de publicación a una URL especificada.
 * @param {string} url - La URL a la que se realiza la solicitud posterior.
 * @param {object} deviceSpect - Un objeto que contiene los encabezados de solicitud.
 * @returns {Promise} - Una promesa que se resuelve con la respuesta si la solicitud es exitosa y rechaza con un error si la solicitud falla.
 */
module.exports.autoRefresh = autoRefresh;

function autoRefresh (url, deviceSpect) {
  return new Promise((resolve, reject) => {
    my.request({
      url,
      method: "POST",
      dataType: "json",
      data: {
        data: null
      },
      headers: {
        ...deviceSpect
      },
      success: resolve,
      fail: reject
    });
  });
}
