const DeviceSpectModel = require("./main/domain/DeviceSpectViewModel");
App({
  onLaunch (options) {
    const {
      referrerInfo: {
        extraData
      } = {}
    } = my.getLaunchOptionsSync();

    const data = extraData;
    const deviceData = my.getSystemInfoSync();
    DeviceSpectModel.CreateInfoDeviceStorage(data, deviceData);
    my.setStorageSync({
      key: 'extraData',
      data
    });
  }
});
