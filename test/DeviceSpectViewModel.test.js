const DeviceSpectRepository = require("../main/data/attributes/DeviceSpect/repository/DeviceSpectRepository");
const InfoDevice = require("../main/data/attributes/DeviceSpect/entities/DeviceSpect");
const { CreateInfoDeviceStorage, GetInfoDeviceStorage } = require("../main/domain/DeviceSpectViewModel");


// Mocked JSON data
const jsonString = `{
  "deviceId": "device123",
  "deviceName": "Device Name",
  "deviceType": "Phone"
}`;

describe('createInfoDeviceStorage', () => {
  test('should create and store device info in the repository', () => {
    const infoDevice = new InfoDevice(JSON.parse(jsonString));

    const deviceSpectRepository = new DeviceSpectRepository();
    const spyCreateDeviceSpectSourceLocal = jest.spyOn(deviceSpectRepository, 'CreateDeviceSpectSourceLocal').mockReturnValue();

    CreateInfoDeviceStorage(jsonString);

    expect(spyCreateDeviceSpectSourceLocal).toHaveBeenCalledWith(infoDevice);
  });
});

describe('getInfoDeviceStorage', () => {
  test('should retrieve device info from the repository', () => {
    const deviceSpectRepository = new DeviceSpectRepository();
    const storedInfoDevice = { /* Mocked stored device info */ };
    const spyGetDeviceSpectSourceLocal = jest.spyOn(deviceSpectRepository, 'GetDeviceSpectSourceLocal').mockReturnValue(storedInfoDevice);

    const response = GetInfoDeviceStorage();

    expect(spyGetDeviceSpectSourceLocal).toHaveBeenCalled();
    expect(response).toEqual(storedInfoDevice);
  });
});
