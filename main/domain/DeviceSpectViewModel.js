const DeviceSpectRepository = require("../data/attributes/DeviceSpect/repository/DeviceSpectRepository");
const InfoDevice= require("../data/attributes/DeviceSpect/entities/DeviceSpect");;

function CreateInfoDeviceStorage(jsonString) {
  const infoDevice = new InfoDevice(JSON.parse(jsonString));
  const userServiceRepository = new DeviceSpectRepository();
  const res = userServiceRepository.CreateDeviceSpectSourceLocal(infoDevice) ;
}

function GetInfoDeviceStorage(){
  const userServiceRepository = new DeviceSpectRepository();
  const response= userServiceRepository.GetDeviceSpectSourceLocal();
  return response
}

module.exports.CreateInfoDeviceStorage = CreateInfoDeviceStorage;
module.exports.GetInfoDeviceStorage = GetInfoDeviceStorage;
