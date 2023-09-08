const AutoRefreshRepository = require("../data/attributes/AutoRefreshToken/repository/AutoRefreshRepository");

/**
 * Actualiza el token llamando al método `Autorefresh` de la clase 'AutorefreshRepository`.
 * Si la respuesta del método `Autorefresh` es exitoso y contiene un token válido,
 * Se llama al método `Autorefreshlocal` para actualizar el token local.
 * @param {Object} deviceSpect - Un objeto que representa la especificación del dispositivo.
 */

async function refreshToken (deviceSpect) {
  const tokenRepository = new AutoRefreshRepository();

  try {
    const resToken = await tokenRepository.autoRefresh(deviceSpect);
    if (resToken && resToken.data && resToken.data.error === 0 && resToken.data.response) {
      this.changeValueHeader("X-SESSION-ID", resToken.data.response.cuenta.token);
    }
  } catch (error) {
    // console.error("Error refrescando el token", error);
  }
}

/**
 * Esta función se utiliza para cambiar el valor de un encabezado específico en el objeto AutorefreshRepository.
 * @param {string} key - El nombre del encabezado a ser cambiado.
 * @param {*} value - El nuevo valor para el encabezado.
 */

function changeValueHeader (key, value) {
  const tokenRepository = new AutoRefreshRepository();
  let result;
  try {
    result = tokenRepository.changeHeaderLocal(key, value);
  } catch (error) {
    // console.error("Error changing the token header", error);
  }
  return result;
}

function changeValueInfo (key, value) {
  const tokenRepository = new AutoRefreshRepository();
  let result;
  try {
    result = tokenRepository.changeInfoLoginLocal(key, value);
  } catch (error) {
    // console.error("Error changing the token header", error);
  }
  return result;
}

module.exports.refreshToken = refreshToken;
module.exports.changeValueHeader = changeValueHeader;
module.exports.changeValueInfo = changeValueInfo;


