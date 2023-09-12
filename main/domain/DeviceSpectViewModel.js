const DeviceSpectRepository = require("../data/attributes/DeviceSpect/repository/DeviceSpectRepository");
const AutoRefreshRepository = require("../data/attributes/AutoRefreshToken/repository/AutoRefreshRepository");

function GetInfoDeviceStorage () {
  let response = null;
  try {
    const userServiceRepository = new DeviceSpectRepository();
    response = userServiceRepository.GetDeviceSpectSourceLocal();
  } catch (error) {

  }
  return response;
}

function CreateInfoDeviceStorage (data) {
  const result = {
    data: null,
    success: false
  };
  try {
    let headersUpdated;
    let loginInfoUpdated;
    const tokenRepository = new AutoRefreshRepository();

    if (data) {
      const extraData = data.response[1].data.response

      // LoginInfo
      const usuario = extraData.usuario;
      tokenRepository.changeInfoLoginLocal("nombre", usuario.nombre);
      tokenRepository.changeInfoLoginLocal("email", usuario.UserProfileID);
      tokenRepository.changeInfoLoginLocal("apellido", usuario.apellido);
      tokenRepository.changeInfoLoginLocal("DocumentNumber", usuario.DocumentNumber);
      loginInfoUpdated = tokenRepository.changeInfoLoginLocal("DocumentType", usuario.DocumentType);

      // DevicesSpect
      tokenRepository.changeHeaderLocal("X-SESSION-ID", extraData.cuentas[0].token);
      tokenRepository.changeHeaderLocal("X-MC-MAIL", extraData.usuario.UserProfileID);
      tokenRepository.changeHeaderLocal("X-MC-USER-AGENT", "eyJpcCI6IjE3Mi4yMS44My4yNSIsInVzZXJBZ2VudCI6Ik1pQ2xhcm9BcHAvMC4wLjEgKHNhbXN1bmc7IFNNLUc5ODhOOyBcdTAwM2NhbmRyb2lkLzlcdTAwM2UpIn0=");
      headersUpdated = tokenRepository.changeHeaderLocal("X-MC-DEVICE-ID", "sdSS5V/uzNMk7u+w5J7jrLK82uPH+QeVMag0lGPgjM/XZ5KOc7MKnHFsFNb8kPQtil3fH8ewmXvXD88huw4LGecaguoggK6aWSq+o3TmC0uyWNagvvJpl2R8VGwFdiil/JDQXF/JXv5Jm8nA+lr0TEMDDWqfc5bEtnOvX9mmmaQ=");

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
module.exports.GetInfoDeviceStorage = GetInfoDeviceStorage;
