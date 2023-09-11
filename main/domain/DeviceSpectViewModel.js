const DeviceSpectRepository = require("../data/attributes/DeviceSpect/repository/DeviceSpectRepository");
const InfoDevice = require("../data/attributes/DeviceSpect/entities/DeviceSpect");
const RefreshTokenViewModel = require("../domain/RefreshTokenViewModel")
// function CreateInfoDeviceStorage (jsonString) {
//   const infoDevice = new InfoDevice(JSON.parse(jsonString));
//   const deviceSpectRepository = new DeviceSpectRepository();
//   deviceSpectRepository.CreateDeviceSpectSourceLocal(infoDevice);
// }

function GetInfoDeviceStorage() {
  const userServiceRepository = new DeviceSpectRepository();
  const response = userServiceRepository.GetDeviceSpectSourceLocal();
  return response;
}

function CreateInfoDeviceStorage(data) {
  let headersUpdated;
  if (data) {
    let extraData = data.response[1].data.response

    // LoginInfo
    const usuario = extraData.usuario;
    headersUpdated = RefreshTokenViewModel.changeValueInfo("nombre", usuario.nombre);
    headersUpdated = RefreshTokenViewModel.changeValueInfo("email", usuario.UserProfileID);
    headersUpdated = RefreshTokenViewModel.changeValueInfo("apellido", usuario.apellido);
    headersUpdated = RefreshTokenViewModel.changeValueInfo("DocumentNumber", usuario.DocumentNumber);
    headersUpdated = RefreshTokenViewModel.changeValueInfo("DocumentType", usuario.DocumentType);

    //DevicesSpect
    headersUpdated = RefreshTokenViewModel.changeValueHeader(
      "X-SESSION-ID",
      extraData.cuentas[0].token
    );

    // TODO preguntar origen headers
    headersUpdated = RefreshTokenViewModel.changeValueHeader(
      "X-MC-MAIL",
      extraData.usuario.UserProfileID
    ); headersUpdated = RefreshTokenViewModel.changeValueHeader("X-MC-USER-AGENT",
      "eyJpcCI6IjE3Mi4yMS44My4yNSIsInVzZXJBZ2VudCI6Ik1pQ2xhcm9BcHAvMC4wLjEgKHNhbXN1bmc7IFNNLUc5ODhOOyBcdTAwM2NhbmRyb2lkLzlcdTAwM2UpIn0="),
      headersUpdated = RefreshTokenViewModel.changeValueHeader(
        "X-MC-DEVICE-ID",
        "sdSS5V/uzNMk7u+w5J7jrLK82uPH+QeVMag0lGPgjM/XZ5KOc7MKnHFsFNb8kPQtil3fH8ewmXvXD88huw4LGecaguoggK6aWSq+o3TmC0uyWNagvvJpl2R8VGwFdiil/JDQXF/JXv5Jm8nA+lr0TEMDDWqfc5bEtnOvX9mmmaQ="),

      RefreshTokenViewModel.refreshToken(headersUpdated).then(() => { });
  }

}

module.exports.CreateInfoDeviceStorage = CreateInfoDeviceStorage;
module.exports.GetInfoDeviceStorage = GetInfoDeviceStorage;
