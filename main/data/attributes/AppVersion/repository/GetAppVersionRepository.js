const GetAppVersionListDataSourceRemote = require("../dataSource/GetAppVersionDataSourceRemote");
const getAppVersionListDataSourceRemote = new GetAppVersionListDataSourceRemote();

module.exports = class GetAppVersionRepository {
  static instance;
  constructor() {
    if (GetAppVersionRepository.instance) {
      return GetAppVersionRepository.instance;
    } else {
      GetAppVersionRepository.instance = this;
    }
  }
  async getAppVersionList(deviceSpect) {
    return await getAppVersionListDataSourceRemote.getAppVersionList(
      deviceSpect
    );
  }
};
