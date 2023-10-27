module.exports.CreateDeviceSpectInStorage = CreateDeviceSpectInStorage;
module.exports.GetDeviceSpectInStorage = GetDeviceSpectInStorage;

/**
 *Almacena las especificaciones del dispositivo en el almacenamiento utilizando la tecla proporcionada.
 * @param {string} key - La clave utilizada para almacenar las especificaciones del dispositivo en el almacenamiento.
 * @param {object} data -Un objeto que contiene las especificaciones del dispositivo.
 * @returns {boolean} - Devuelve verdadero si las especificaciones del dispositivo se almacenan correctamente en el almacenamiento, de lo contrario devuelve falso.
 */
function CreateDeviceSpectInStorage (key, data) {
  try {
    my.setStorage({
      key,
      data: {
        "X-SESSION-ID": data["X-SESSION-ID"],
        "X-MC-LINE": data["X-MC-LINE"],
        "X-MC-LOB": data["X-MC-LOB"],
        "Content-Type": data["Content-Type"],
        "X-MC-MAIL": data["X-MC-MAIL"],
        "X-Carrier": data["X-Carrier"],
        "X-Wifi": data["X-Wifi"],
        "X-MC-HE-V": data["X-MC-HE-V"],
        "X-MC-SO-V": data["X-MC-SO-V"],
        "Cache-Control": data["Cache-Control"],
        "X-MC-SO-API": data["X-MC-SO-API"],
        "X-MC-SO-PHONE-F": data["X-MC-SO-PHONE-F"],
        "X-MC-SO-PHONE-M": data["X-MC-SO-PHONE-M"],
        "X-MC-APP-V": data["X-MC-APP-V"],
        "X-MC-DEVICE-NAME": data["X-MC-DEVICE-NAME"],
        "X-MC-DEVICE-ID": data["X-MC-DEVICE-ID"],
        "X-MC-USER-AGENT": data["X-MC-USER-AGENT"]
      }
    });
    return true;
  } catch (error) {
    return false;
  }
}

/**
 *Recupera las especificaciones del dispositivo del almacenamiento utilizando la tecla proporcionada.
 * @param {string} tecla: la clave utilizada para recuperar las especificaciones del dispositivo del almacenamiento.
 * @returns {objeto} - Devuelve las especificaciones del dispositivo como un objeto si existen en el almacenamiento, de lo contrario devuelve un objeto de error.
 */
function GetDeviceSpectInStorage (key) {
  try {
    const res = my.getStorageSync({ key });
    return res.data;
  } catch (error) {
    return error;
  }
}
