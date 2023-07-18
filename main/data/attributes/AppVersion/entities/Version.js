module.exports = class Version {
  static instance;
  constructor(version, plataforma) {
    this.version = version;
    this.plataforma = plataforma;
  }
  updateParams(params) {
    Object.assign(this, params);
  }
};
