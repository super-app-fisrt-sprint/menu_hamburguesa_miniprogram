module.exports.getAppVersionList = getAppVersionList;

/**
 * Realiza una solicitud GET a la URL especificada con los datos y encabezados dados.
 * Devuelve una promesa que se resuelve con la respuesta si la solicitud es exitosa y rechaza con un error si la solicitud falla.
 *
 * @param {string} url - La URL para hacer que la solicitud obtenga.
 * @param {object} deviceSpec - Un objeto que contiene los encabezados "X-MC-Device-ID" y "X-MC-User-Agent".
 * @param {object} data - Un objeto que contiene la versión y las propiedades de Platlaforma.
 * @returns {Promise} - Una promesa que se resuelve con la respuesta si la solicitud es exitosa y rechaza con un error si la solicitud falla.
 */
function getAppVersionList (url, deviceSpec, data) {
  return new Promise((resolve, reject) => {
    my.request({
      url,
      method: "GET",
      data: {
        version: data.version,
        plataforma: data.plataforma
      },
      dataType: "application/json",
      headers: {
        "X-MC-DEVICE-ID": deviceSpec["X-MC-DEVICE-ID"],
        "X-MC-USER-AGENT": deviceSpec["X-MC-USER-AGENT"]
      },
      success: res => {
        resolve(res);
      },
      fail: reject => {
        reject(reject);
      }
    });
  });
}
