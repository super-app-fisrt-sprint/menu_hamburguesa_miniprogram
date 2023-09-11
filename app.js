const DeviceSpectModel = require("/main/domain/DeviceSpectViewModel");

App({
  onLaunch () {
    const isIDE = my.isIDE;
    const { query, referrerInfo: { extraData } = {} } = my.getLaunchOptionsSync();
    DeviceSpectModel.CreateInfoDeviceStorage(extraData)

    // let test_data = my.getStorageSync({ key: "N_USER_INFO_LOGIN" });
    // let data_testing = JSON.stringify(test_data);
    // my.alert({
    //   title: 'Prueba storage',
    //   content: `testing data storage : ${data_testing}`
    // });
  }
});
