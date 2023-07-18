module.exports.getAppVersionList = this.getAppVersionList;

function getAppVersionList(url, deviceSpect) {
  return new Promise((resolve, reject) => {
    my.request({
      url: url,
      method: "GET",
      headers: {
        "X-MC-DEVIDE-ID": deviceSpect["X-MC-DEVIDE-ID"],
        "X-MC-USER-AGENT": deviceSpect["X-MC-USER-AGENT"]
      },
      success: res => {
        resolve(res);
      },
      fail: res => {
        reject(res);
      }
    });
  });
}
