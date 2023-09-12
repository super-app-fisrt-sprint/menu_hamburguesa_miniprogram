const ResponseAppVersion = require("../data/attributes/AppVersion/entities/Version");
const AppVersionRepository = require("../data/attributes/AppVersion/repository/GetAppVersionRepository");

async function getAppVersion (deviceSpect) {
  const appVersionRepository = new AppVersionRepository();
  const versionApp = new ResponseAppVersion("15.9.0", "android");

  const result = { data: null, success: false };
  try {
    const res = await appVersionRepository.getAppVersionList(
      deviceSpect,
      versionApp
    );
    if (res && res.data && res.data.includes(`"mensaje":"Ok"`)) {
      result.success = true;
      result.data = res.data;
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
