module.exports = class APIs {
  static get URL_BASE() {
    return URL_BASE;
  }

  static get HEADER_PARAMS() {
    return HEADER_PARAMS;
  }
};

const URL_BASE = {
  URL_API_GET_VERSION_APP:
    "https://apiselfservice.co/api/index.php/v1/core/movil/VersionesApp.json"
};
