const DeviceSpectRepository = require("../data/attributes/DeviceSpect/repository/DeviceSpectRepository");
const AutoRefreshRepository = require("../data/attributes/AutoRefreshToken/repository/AutoRefreshRepository");
const InfoDevice = require("../data/attributes/DeviceSpect/entities/DeviceSpect");
const RefreshTokenViewModel = require("../domain/RefreshTokenViewModel")

function GetInfoDeviceStorage () {
  const userServiceRepository = new DeviceSpectRepository();
  const response = userServiceRepository.GetDeviceSpectSourceLocal();
  return response;
}

function CreateInfoDeviceStorage (data) {
  let result = { data: null, success: false };
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

      // TODO preguntar origen headers
      // DevicesSpect
      tokenRepository.changeHeaderLocal("X-SESSION-ID", extraData.cuentas[0].token);
      tokenRepository.changeHeaderLocal("X-MC-MAIL", extraData.usuario.UserProfileID);
      tokenRepository.changeHeaderLocal("X-MC-USER-AGENT", "eyJpcCI6IjE3Mi4yMS44My4yNSIsInVzZXJBZ2VudCI6Ik1pQ2xhcm9BcHAvMC4wLjEgKHNhbXN1bmc7IFNNLUc5ODhOOyBcdTAwM2NhbmRyb2lkLzlcdTAwM2UpIn0=");
      headersUpdated = tokenRepository.changeHeaderLocal("X-MC-DEVICE-ID", "sdSS5V/uzNMk7u+w5J7jrLK82uPH+QeVMag0lGPgjM/XZ5KOc7MKnHFsFNb8kPQtil3fH8ewmXvXD88huw4LGecaguoggK6aWSq+o3TmC0uyWNagvvJpl2R8VGwFdiil/JDQXF/JXv5Jm8nA+lr0TEMDDWqfc5bEtnOvX9mmmaQ=");
           
      console.info(loginInfoUpdated);
      console.info(headersUpdated);
      if (headersUpdated.success) {
        RefreshTokenViewModel.refreshToken(headersUpdated.data).then(() => {
         
          result.success = true;
          console.log(result);
        });
      }
    }
  } catch (error) {

  }
  console.log(result);
  return result;
}

module.exports.CreateInfoDeviceStorage = CreateInfoDeviceStorage;
module.exports.GetInfoDeviceStorage = GetInfoDeviceStorage;
