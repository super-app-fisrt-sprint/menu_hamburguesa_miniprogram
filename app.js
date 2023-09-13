const DeviceSpectModel = require("/main/domain/DeviceSpectViewModel");
App({
  onLaunch () {
    const { referrerInfo: { extraData } = {} } = my.getLaunchOptionsSync();
    const deviceData = my.getSystemInfoSync();
    DeviceSpectModel.CreateInfoDeviceStorage(extraData, deviceData);
    
    my.setStorageSync({ key:'extraData', data: extraData  });
  }
});
