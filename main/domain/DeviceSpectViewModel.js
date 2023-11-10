const DeviceSpectRepository = require("../data/attributes/DeviceSpect/repository/DeviceSpectRepository");
const AutoRefreshRepository = require("../data/attributes/AutoRefreshToken/repository/AutoRefreshRepository");

function getInfoDeviceStorage () {
  let response = null;
  try {
    const userServiceRepository = new DeviceSpectRepository();
    response = userServiceRepository.GetDeviceSpectSourceLocal();
  } catch (error) {

  }
  return response;
}

function CreateInfoDeviceStorage (data, deviceData) {
  const result = {
    data: null,
    success: false
  };
  try {
    let headersUpdated;
    let loginInfoUpdated;
    const tokenRepository = new AutoRefreshRepository();

    if (data) {
      const extraData = data.response[1].data.response;

      const infoLogin = {
        nombre: extraData.usuario.nombre,
        email: extraData.usuario.UserProfileID,
        apellido: extraData.usuario.apellido,
        DocumentNumber: extraData.usuario.DocumentNumber,
        DocumentType: extraData.usuario.DocumentType
      };

      const deviceSpect = {
        "X-SESSION-ID": extraData.cuentas[0].token,
        "X-MC-MAIL": extraData.usuario.UserProfileID,
        "X-MC-USER-AGENT": "eyJpcCI6IjE3Mi4yMS44My4yNSIsInVzZXJBZ2VudCI6Ik1pQ2xhcm9BcHAvMC4wLjEgKHNhbXN1bmc7IFNNLUc5ODhOOyBcdTAwM2NhbmRyb2lkLzlcdTAwM2UpIn0=",
        "X-MC-DEVICE-ID": "sdSS5V/uzNMk7u+w5J7jrLK82uPH+QeVMag0lGPgjM/XZ5KOc7MKnHFsFNb8kPQtil3fH8ewmXvXD88huw4LGecaguoggK6aWSq+o3TmC0uyWNagvvJpl2R8VGwFdiil/JDQXF/JXv5Jm8nA+lr0TEMDDWqfc5bEtnOvX9mmmaQ=",
        "X-MC-LOB": extraData.usuario.tipoClienteID,
        "X-MC-SO": deviceData.platform.toLowerCase(),
        "X-MC-SO-PHONE-F": deviceData.brand,
        "X-MC-SO-PHONE-M": deviceData.model,
        "X-MC-DEVICE-NAME": deviceData.brand + deviceData.model,
        "X-MC-SO-V": deviceData.system,
        "X-Wifi": deviceData.wifiEnabled,
        "Cache-Control": "no-cache",
        "Content-Type": "application/json"
      };

      loginInfoUpdated = Object.keys(infoLogin).forEach((key) => {
        tokenRepository.changeInfoLoginLocal(key, infoLogin[key]);
      });

      headersUpdated = Object.keys(deviceSpect).forEach((key) => {
        tokenRepository.changeHeaderLocal(key, deviceSpect[key]);
      });

      result.success = true;
      result.data = {
        infologin: loginInfoUpdated,
        devicespect: headersUpdated
      };
    }
  } catch (error) {

  }
  return result;
}

module.exports.CreateInfoDeviceStorage = CreateInfoDeviceStorage;
module.exports.getInfoDeviceStorage = getInfoDeviceStorage;
