const AutoRefreshRepository = require("../data/attributes/AutoRefreshToken/repository/AutoRefreshRepository");

/**
 * Actualiza el token llamando al método `Autorefresh` de la clase 'AutorefreshRepository`.
 * Si la respuesta del método `Autorefresh` es exitoso y contiene un token válido,
 * Se llama al método `Autorefreshlocal` para actualizar el token local.
 * @param {Object} deviceSpect - Un objeto que representa la especificación del dispositivo.
 */

async function refreshToken (deviceSpect) {
  const tokenRepository = new AutoRefreshRepository();
  const result = { data: null, success: false };
  try {
    const resToken = await tokenRepository.autoRefresh(deviceSpect);
    if (resToken && resToken.data && resToken.data.error === 0 && resToken.data.response) {
      tokenRepository.changeHeaderLocal("X-SESSION-ID", resToken.data.response.cuenta.token)
        .then((headersupdated) => {
          result.data = headersupdated;
          result.success = true;
        });
    }
  } catch (error) {
    // console.error("Error refrescando el token", error);
  }
  return result;
}

/**
 * Esta función se utiliza para cambiar el valor de un encabezado específico en el objeto AutorefreshRepository.
 * @param {string} key - El nombre del encabezado a ser cambiado.
 * @param {*} value - El nuevo valor para el encabezado.
 */

function changeValueHeader (key, value) {
  const tokenRepository = new AutoRefreshRepository();
  const result = { data: null, success: false };
  try {
    result.data = tokenRepository.changeHeaderLocal(key, value);
    result.success = true;
  } catch (error) {
    // console.error("Error changing the token header", error);
  }
  return result;
}

function changeValueInfo (key, value) {
  const tokenRepository = new AutoRefreshRepository();
  const result = { data: null, success: false };
  try {
    result.data = tokenRepository.changeInfoLoginLocal(key, value);
    result.success = true;
  } catch (error) {
    // console.error("Error changing the token header", error);
  }
  return result;
}

module.exports.refreshToken = refreshToken;
module.exports.changeValueHeader = changeValueHeader;
module.exports.changeValueInfo = changeValueInfo;
