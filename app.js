const DeviceSpectModel = require("/main/domain/DeviceSpectViewModel");
const RefreshTokenViewModel = require("/main/domain/RefreshTokenViewModel");
App({
  onLaunch () {
    const { referrerInfo: { extraData } = {} } = my.getLaunchOptionsSync();
    const deviceData = my.getSystemInfoSync();
    const infoStorage = DeviceSpectModel.CreateInfoDeviceStorage(extraData, deviceData);
    if (infoStorage.success) RefreshTokenViewModel.refreshToken(infoStorage.data.devicespect);
  }
});
