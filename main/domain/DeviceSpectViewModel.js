const DeviceSpectRepository = require("../data/attributes/DeviceSpect/repository/DeviceSpectRepository");
const InfoDevice = require("../data/attributes/DeviceSpect/entities/DeviceSpect");
const RefreshTokenViewModel = require("../domain/RefreshTokenViewModel")

function GetInfoDeviceStorage () {
  const userServiceRepository = new DeviceSpectRepository();
  const response = userServiceRepository.GetDeviceSpectSourceLocal();
  return response;
}

function CreateInfoDeviceStorage (data) {
  const result = { data: null, success: false };
  try {
    let headersUpdated;
    let loginInfoUpdated;

    if (data) {
      const extraData = data.response[1].data.response

      // LoginInfo
      const usuario = extraData.usuario;
      RefreshTokenViewModel.changeValueInfo("nombre", usuario.nombre);
      RefreshTokenViewModel.changeValueInfo("email", usuario.UserProfileID);
      RefreshTokenViewModel.changeValueInfo("apellido", usuario.apellido);
      RefreshTokenViewModel.changeValueInfo("DocumentNumber", usuario.DocumentNumber);
      loginInfoUpdated = RefreshTokenViewModel.changeValueInfo("DocumentType", usuario.DocumentType);

      // TODO preguntar origen headers
      // DevicesSpect
      RefreshTokenViewModel.changeValueHeader("X-SESSION-ID", extraData.cuentas[0].token);
      RefreshTokenViewModel.changeValueHeader("X-MC-MAIL", extraData.usuario.UserProfileID);
      RefreshTokenViewModel.changeValueHeader("X-MC-USER-AGENT", "eyJpcCI6IjE3Mi4yMS44My4yNSIsInVzZXJBZ2VudCI6Ik1pQ2xhcm9BcHAvMC4wLjEgKHNhbXN1bmc7IFNNLUc5ODhOOyBcdTAwM2NhbmRyb2lkLzlcdTAwM2UpIn0=");
      headersUpdated = RefreshTokenViewModel.changeValueHeader("X-MC-DEVICE-ID", "sdSS5V/uzNMk7u+w5J7jrLK82uPH+QeVMag0lGPgjM/XZ5KOc7MKnHFsFNb8kPQtil3fH8ewmXvXD88huw4LGecaguoggK6aWSq+o3TmC0uyWNagvvJpl2R8VGwFdiil/JDQXF/JXv5Jm8nA+lr0TEMDDWqfc5bEtnOvX9mmmaQ=");

      if (headersUpdated.success) {
        RefreshTokenViewModel.refreshToken(headersUpdated.data).then(() => {
          result.success = true
        });
      }
    }
  } catch (error) {

  }
  return result;
}

module.exports.CreateInfoDeviceStorage = CreateInfoDeviceStorage;
module.exports.GetInfoDeviceStorage = GetInfoDeviceStorage;
