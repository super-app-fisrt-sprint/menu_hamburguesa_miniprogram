Component({
  data: {
    loadingImgSrc: "https://www2.claro.com.co/portal/co/img/loader-claro.gif",
    showLoading: true
  },
  methods: {
    showLoading: () => {
      const that = this;
      my.createSelectorQuery()
        .select("#loading-img")
        .exec(res => {
          that.setData({
            loadingImg: res[0]
          });
        });
      that.setData({
        ["loadingImg.src"]: that.data.loadingImgSrc,
        ["loadingImg.mode"]: "aspectFit",
        showLoading: true
      });
    },
    hideLoading: () => {
      this.setData({
        showLoading: false
      });
    }
  }
});
