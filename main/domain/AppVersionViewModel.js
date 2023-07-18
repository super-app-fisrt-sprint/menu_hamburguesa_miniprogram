const ResponseAppVersion = require("../data/attributes/AppVersion/entities/Version");
const AppVersionRepository = require("../data/attributes/AppVersion/repository/GetAppVersionRepository");

async function getAppVersion(deviceSpect) {
  const appVersionRepository = new AppVersionRepository();
  let result = { data: null, success: false };
  try {
    const res = await appVersionRepository.getAppVersionList(deviceSpect);
    if (res && res.data && res.data.error == 0 && res.data.response) {
      let appVersionList = res.data.response.map(item => {
        let version = new ResponseAppVersion();
        version.updateParams({ version: item.version });
        version.updateParams({ plataforma: item.plataforma });
        version.updateParams({ is_hms: item.is_hms });
      });
      result.data = appVersionList;
      result.success = true;
    } else {
      result.data = "No se pudo obtener la version correcta del app";
    }
    return result;
  } catch (error) {
    result.data = "Ocurrio un error al obtener la version del app";
    return result;
  }
}

module.exports.getAppVersion = getAppVersion;
