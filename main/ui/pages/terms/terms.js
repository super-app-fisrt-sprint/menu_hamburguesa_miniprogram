Page({
  data: {
    url:
      "https://tienda.claro.com.co/wcsstore/Claro/images/contenidos/Terminos%20y%20Condiciones.pdf"
  },
  onLoad (query) {
    this.setData({
      url: query.url
    });
  }
});
