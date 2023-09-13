module.exports.getAppVersionList = getAppVersionList;

function getAppVersionList (url, deviceSpect, data) {
  return new Promise((resolve, reject) => {
    my.request({
      url,
      method: "GET",
      data: {
        version: data.version,
        plataforma: data.plataforma
      },
      dataType: "application/json",
      headers: {
        "X-MC-DEVICE-ID": deviceSpect["X-MC-DEVICE-ID"],
        "X-MC-USER-AGENT": deviceSpect["X-MC-USER-AGENT"]
      },
      success: res => {
        resolve(res);
      },
      fail: reject => {
        reject(reject);
      }
    });
  });
}
