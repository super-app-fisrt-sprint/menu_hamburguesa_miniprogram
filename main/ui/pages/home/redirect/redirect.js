Page({
  data: {
    url: ""
  },
  onLoad(options) {
    my.setNavigationBar({
      title: ""
    });
    let url = "";
    if (typeof options.url === "string") {
      url = options.url;
    } else {
      url = options.url.join("&url=");
    }
    this.setData({
      url
    });
  }
});
