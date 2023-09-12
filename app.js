const DeviceSpectModel = require("/main/domain/DeviceSpectViewModel");
const RefreshTokenViewModel = require("/main/domain/RefreshTokenViewModel");
App({
  onLaunch () {
    const { query, referrerInfo: { extraData } = {} } = my.getLaunchOptionsSync();
    const infoStorage = DeviceSpectModel.CreateInfoDeviceStorage(extraData);
    console.info(infoStorage);
    if(infoStorage.success) RefreshTokenViewModel.refreshToken(infoStorage.data.devicespect);

    // let test_data = my.getStorageSync({ key: "N_USER_INFO_LOGIN" });
    // let data_testing = JSON.stringify(test_data);
    // my.alert({
    //   title: 'Prueba storage',
    //   content: `testing data storage : ${data_testing}`
    // });
  }
});
