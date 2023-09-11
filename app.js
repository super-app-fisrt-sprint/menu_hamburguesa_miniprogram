const DeviceSpectModel = require("/main/domain/DeviceSpectViewModel");

App({
  onLaunch() {
    const isIDE = my.isIDE;
    const { query, referrerInfo: { extraData } = {} } = my.getLaunchOptionsSync();
    DeviceSpectModel.CreateInfoDeviceStorage(extraData)
  }
});
