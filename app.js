App({
  onLaunch(options) {
   
    console.info("App onLaunch");
    const { query, referrerInfo: { extraData } = {} } = my.getLaunchOptionsSync();
    my.alert({
      title: 'Prueba data',
      content: `query: ${JSON.stringify(query) || ''}\nextraData: ${JSON.stringify(extraData) || ''}`,
      
      success: () => {
        const res = my.getStorageSync({
          key: 'RESPONSE_LOGIN'
        });

        my.alert({
          title: 'Prueba data en storage',
          content: res.data
        })}
    });
  },
  onShow(options) {
   
  }
});
