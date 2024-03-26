module.exports.requestbannerList = requestbannerList;
/**
 * Realiza una solicitud HTTP GET a una URL especificada.
 *
 * @param {String} URL: la URL para enviar la solicitud GET a.
 * @param {object} Devicespect: un objeto que contiene las especificaciones del dispositivo, incluidos los encabezados "X-MC-SO", "X-MC-Device-ID" y "X-MC-User-Agent" requeridos para la solicitud.
 * @returns {promesa}: una promesa que se resuelve con la respuesta si la solicitud es exitosa o rechaza con el error si la solicitud falla.
 */
function requestbannerList (url, deviceSpect) {
  return new Promise((resolve, reject) => {
    my.request({
      url,
      method: "GET",
      dataType: "json",
      headers: {
        "X-MC-SO": deviceSpect["X-MC-SO"],
        "X-MC-DEVICE-ID": deviceSpect["X-MC-DEVICE-ID"],
        "X-MC-USER-AGENT": deviceSpect["X-MC-USER-AGENT"]
      },
      success: (res) => {
        resolve(res);
      },
      fail: (res) => {
        reject(res);
      }
    });
  });
}
