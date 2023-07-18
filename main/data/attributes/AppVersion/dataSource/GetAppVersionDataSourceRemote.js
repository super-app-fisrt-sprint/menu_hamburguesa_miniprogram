const getAppVersionListSourceRemote = require("../source/GetAppVersion");
const api = require("../../../config/remote/APIs");

module.exports = class GetAppVersionListDataSource {
  static instance;
  constructor() {
    if (GetAppVersionListDataSource.instance) {
      return GetAppVersionListDataSource.instance;
    } else {
      GetAppVersionListDataSource.instance = this;
    }
  }
  async getAppVersionList(deviceSpect, data) {
    return await getAppVersionListSourceRemote.getAppVersionList(
      api.URL_BASE.URL_API_GET_VERSION_APP,
      deviceSpect,
      data
    );
  }
};
