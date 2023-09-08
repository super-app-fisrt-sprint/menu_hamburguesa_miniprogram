const RefreshTokenViewModel = require("/main/domain/RefreshTokenViewModel");

App({
  onShow() {
    const { query, referrerInfo: { extraData } = {} } = my.getLaunchOptionsSync();
    let receivedData = extraData;
    my.setStorageSync({
      key: 'test_integration',
      data: receivedData
    });

    console.info("Prueba integracion")
    let test_data = my.getStorageSync({ key: "test_integration" })
    let data_testing = JSON.stringify(test_data)
    console.log(`Obteniendo data pruebas : ${data_testing}`)
    my.alert({
      title: 'Prueba data',
      content: `query:${JSON.stringify(query) || ''}\nextraData:${JSON.stringify(extraData) || ''}`
    });

    my.alert({
      title: 'Prueba storage',
      content: `testing data storage : ${data_testing}`
    });
  },
});
