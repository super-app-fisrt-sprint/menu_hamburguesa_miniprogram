const DeviceSpectModel = require("/main/domain/DeviceSpectViewModel");
App({
  onLaunch (options) {
    
    const { referrerInfo: { extraData } = {} } = my.getLaunchOptionsSync();

    my.clearStorageSync();
    my.alert({content: {extraData: extraData}});

    const deviceData = my.getSystemInfoSync();
    DeviceSpectModel.CreateInfoDeviceStorage(extraData, deviceData);
    
    
    my.setStorageSync({ key: 'extraData', data: extraData });
  }
});
