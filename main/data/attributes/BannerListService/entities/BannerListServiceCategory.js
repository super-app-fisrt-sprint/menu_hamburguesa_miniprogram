module.exports = class DataBanner {
  static instance;
  constructor(data) {
    this.data = data;

    if (DataBanner.instance) {
      return DataBanner.instance;
    } else {
      DataBanner.instance = this;
    }
  }

  updateParams(params) {
    Object.assign(this, params);
  }
};
