module.exports = class Version {
  static instance;
  constructor(version, plataforma, is_hms) {
    this.version = version;
    this.plataforma = plataforma;
    this.is_hms = is_hms;
  }
  updateParams(params) {
    Object.assign(this, params);
  }
};
