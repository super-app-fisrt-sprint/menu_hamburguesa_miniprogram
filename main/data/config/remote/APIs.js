module.exports = class APIs {
  static get URL_BASE () {
    return URL_BASE;
  }
};

const URL_BASE = {
  URL_API_GET_VERSION_APP: "https://apiselfservice.co/api/index.php/v1/core/movil/VersionesApp.json",
  URL_AUTO_REFRESH: "https://apiselfservice.co/api/index.php/v2/soap/AuthRefresh.json"
};
