const DeviceSpectViewModel = require("../../../domain/DeviceSpectViewModel");
const AppVersionViewModel = require("../../../domain/AppVersionViewModel");
const RefreshTokenViewModel = require("../../../domain/RefreshTokenViewModel");
const BannerListViewModel = require("../../../domain/BannerListViewModel");
const { getUrlClaroVentas } = require("../../../domain/ClaroVentasViewModel");
const { myAppsFlayer, myFirebase } = require("../../../utils/Tags");
Page({
  data: {
    showContent: false,
    scrollTopPos: 0,
    orderIsTap: [],
    toView: "0",
    isButtonPressed: false,
    interval: 0,
    nit: "",
    nombre: "",
    position: "",
    basicVisible: false,
    modalVisible: false,
    showLoading: "",
    urlTerms: "https://miclaroempresas.com.co/documents/330416/0/Condiciones+Legales+de+Acceso+a+Mi+Claro+Empresas.pdf",
    access: [
      {
        icon: "/main/ui/assets/icons/moviles.svg",
        text: "Soluciones\nmóviles",
        hasBadge: false,
        appId: "3482020171845787",
        pageUrl: "main/ui/pages/mobileSolutionsIndex/mobileSolutionsIndex"
      },
      {
        icon: "/main/ui/assets/icons/banda-ancha.svg",
        text: "Soluciones\nfijas HFC",
        hasBadge: false,
        appId: "3482020171847560",
        pageUrl: "main/ui/pages/permanent-services/permanent-services"
      },
      {
        icon: "/main/ui/assets/icons/fibra-optica.svg",
        text: "Soluciones\nfijas FO",
        hasBadge: false,
        appId: "3482020171733540",
        pageUrl: "main/ui/pages/mobileSolutions/mobileSolutions"
      },
      {
        icon: "/main/ui/assets/icons/historial.svg",
        text: "Consulta\ntu factura",
        hasBadge: true,
        appId: "3482020171743017",
        pageUrl: "ui/pages/splash/index"
      },
      {
        icon: "/main/ui/assets/icons/pagos.svg",
        text: "Administrar\npagos",
        hasBadge: true,
        appId: "3482020171735889",
        pageUrl: "ui/pages/splash/index"
      },
      {
        icon: "/main/ui/assets/icons/equipos.svg",
        text: "Equipos\nfinanciados",
        hasBadge: true,
        appId: "3482020171741569",
        pageUrl: "ui/pages/splash/index"
      }
    ],
    menuAccess: [
      {
        iconAccess: "/main/ui/assets/icons/users.svg",
        titleAccess: "Administrar perfiles",
        pageUrl: "main/ui/pages/manageProfiles/manageProfiles",
        appId: "3482020174685949"
      },
      {
        iconAccess: "/main/ui/assets/icons/user.svg",
        titleAccess: "Gestión de la cuenta",
        pageUrl: "main/ui/pages/accountManagement/accountManagement",
        appId: "3482020177494589"
      }
    ],
    footerItems: [
      {
        icon: "/main/ui/assets/icons/claro.svg",
        iconActive: "/main/ui/assets/icons/claro-active.svg",
        title: "Inicio",
        pageUrl: "/pages/index/index",
        isActive: true,
        appId: "",
        path: ""
      },
      {
        icon: "/main/ui/assets/icons/adquirir.svg",
        iconActive: "/main/ui/assets/icons/adquirir-active.svg",
        title: "Adquirir",
        pageUrl: "/pages/index/index",
        isActive: false,
        appId: "",
        path: ""
      },
      {
        icon: "/main/ui/assets/icons/whatsapp.svg",
        iconActive: "/main/ui/assets/icons/whatsapp-active.svg",
        title: "Chat",
        pageUrl: "/pages/index/index",
        isActive: false,
        appId: "3482020173007315",
        path: "main/ui/pages/chatService/chatService"
      },
      {
        icon: "/main/ui/assets/icons/pedidos.svg",
        iconActive: "/main/ui/assets/icons/pedidos-active.svg",
        title: "Pedidos",
        pageUrl: "/pages/index/index",
        isActive: false,
        appId: "3482020173097468",
        path: "main/ui/pages/orders/orders"
      }
    ]
  },
  onLaunch() {
    const { query, referrerInfo: { extraData } = {} } = my.getLaunchOptionsSync();
    // const { query, referrerInfo: { extraData } = {} } = options;
    my.alert({
      title: "Prueba data",
      content: `query: ${JSON.stringify(query) || ""}\nextraData: ${JSON.stringify(extraData) || ""}`
    });
  },
  onLoad() {
    this.showLoadings();
    const infoLogin = my.getStorageSync({ key: "N_USER_INFO_LOGIN" });

    const deviceSpect = DeviceSpectViewModel.getInfoDeviceStorage();
    // Services GETANYMACCLIST and GETCOUNTMASTERLINES

    RefreshTokenViewModel.refreshToken(deviceSpect).then((refreshResult) => { });
    this.bannerList(deviceSpect);
    this.setData({
      nit: infoLogin.data.DocumentNumber,
      nombre: infoLogin.data.nombre,
      tipoDocumento: this.DocumentType(infoLogin.data.DocumentType)
    });

    this.calcularDocumentoIdentidad();
  },
  DocumentType(type) {
    const documentTypes = {
      1: "CC",
      2: "CE",
      3: "PP",
      4: "CD",
      5: "NIT"
    };
    const typeDocument = documentTypes[type] || "";

    return typeDocument;
  },
  navigateToMiniProgram(e) {
    const appId = e.target.dataset.appId;
    const pageUrl = e.target.dataset.pageUrl;

    const extraData = my.getStorageSync({ key: "extraData" }).data || {};
    const dataMiniprogram = extraData.response;
    const dataUser = extraData.keyUser;

    my.navigateToMiniProgram({
      appId,
      path: pageUrl,
      extraData: { response: dataMiniprogram },
      success(res) { },
      fail(err) {
        console.error(err);
      }
    });
  },
  handleShowMenu(e) {
    const { position } = e.target.dataset;
    this.setData({
      position,
      basicVisible: true
    });
    myAppsFlayer("sa_zt_bt_emp_menuh");
    myFirebase("sa_zt_bt_emp_menuh");
  },
  handlePopupClose() {
    this.setData({
      basicVisible: false
    });
  },
  onIconClick(e) {
    const index = e.target.dataset.index;
    const pageUrl = this.data.menuAccess[index].pageUrl;
    const appId = this.data.menuAccess[index].appId;

    const extraData = my.getStorageSync({ key: "extraData" }).data || {};
    const dataMiniprogram = extraData.response;
    const key = extraData.keyUser;

    console.log(appId);
    console.log(pageUrl);
    console.log(dataMiniprogram);

    my.navigateToMiniProgram({
      appId,
      path: pageUrl,
      extraData: {
        response: dataMiniprogram,
        key
      },
      success(res) { },
      fail(err) { }
    });

    console.info(e);
  },
  onFooterItemClick(e) {
    const { index, appId, path } = e.currentTarget.dataset;
    const { footerItems } = this.data;
    if (index === 1) {
      this.purchaseProduct();
    } else {
      const extraData = my.getStorageSync({ key: "extraData" }).data || {};
      const dataMiniprogram = extraData.response;

      my.navigateToMiniProgram({
        appId,
        path,
        extraData: {
          response: dataMiniprogram
        },
        success: function (res) {
          console.log(res);
        },
        fail: function (err) {
          console.log(err);
        }
      });
    }
    this.setData({
      footerItems
    });
  },
  showLoadings() {
    this.setData({
      showLoading: true
    });
  },
  hideLoading() {
    this.setData({
      showLoading: false
    });
  },
  goToTerms() {
    const { urlTerms } = this.data;
    my.downloadFile({
      url: urlTerms,
      success({ apFilePath }) {
        my.openDocument({
          fileType: "pdf",
          filePath: apFilePath,
          success() { },
          fail(res) {
            my.alert({
              content: res.errorMessage || res.error
            });
          }
        });
      }
    });
  },
  handleClose() {
    this.setData({
      modalVisibleDescription: false,
      modalVisible: true,
      basicVisible: true
    });
  },
  onCancelButtonTap() {
    my.redirectTo({
      url: "/main/ui/pages/home/home"
    });
    this.setData({
      modalVisible: false
    });
    myAppsFlayer('sa_zt_bt_emp_cerrarsesion_cancelar')
    myFirebase('sa_zt_bt_emp_cerrarsesion_cancelar')
  },
  onAcceptButtonTap() {
    this.redirectLoginServices();
    this.setData({
      modalVisible: false
    });
  },
  handleOpenModal() {
    this.setData({
      modalVisible: true
    });
    myAppsFlayer('sa_zt_bt_emp_cerrarsesion');
    myFirebase('sa_zt_bt_emp_cerrarsesion');
  },

  onSignOut() {
    my.exitMiniProgram();
    myAppsFlayer("sa_zt_bt_emp_cerrarsesion_aceptar")
    myFirebase("sa_zt_bt_emp_cerrarsesion_aceptar")
  },
  purchaseProduct() {
    const url = getUrlClaroVentas();
    my.call("openUrl", {
      url
    })
      .then((values) => { })
      .catch((value) => { });
  },
  onUnload() { },
  bannerList(deviceSpect) {
    BannerListViewModel.ApiBannerList(deviceSpect).then((result) => {
      if (result !== false) {
        const BannerList = result.data;
        this.setData({
          showContent: true,
          order: BannerList,
          lengthOrder: BannerList.length
        });

        const lengthOrder = this.data.lengthOrder;
        const orderIsTap = new Array(lengthOrder).fill(false);
        orderIsTap[0] = true;
        this.setData({
          orderIsTap,
          interval: 100 / lengthOrder
        });
      }
      this.hideLoading();
    });
  },
  buttonTap(e) {
    const order = this.data.order;
    const id = e.currentTarget.dataset.item;
    const idString = id.toString();
    const orderIsTap = order.map((_, i) => i === id);
    this.setData({
      orderIsTap,
      isButtonPressed: !this.data.isButtonPressed,
      toView: idString
    });
  },
  goToTerms(url) {
    let urlTerms = url;
    if (url && url.startsWith("http://")) {
      urlTerms = url.replace("http://", "https://");
    }
    this.showLoadings();
    const that = this;
    my.downloadFile({
      url: urlTerms,

      success({ apFilePath }) {
        my.openDocument({
          fileType: "pdf",

          filePath: apFilePath,

          success() {
            that.hideLoading();
          },
          fail(res) {
            my.alert({
              content: res.errorMessage || res.error
            });
          }
        });
      },

      fail(res) {
        my.alert({
          content: res.errorMessage || res.error
        });
      }
    });
    myAppsFlayer("sa_zt_bt_emp_tyc")
    myFirebase("sa_zt_bt_emp_tyc")

  },
  swiper(e) {
    const order = this.data.order;
    const { current } = e.detail;
    const orderIsTap = order.map((_, i) => i === current);
    this.setData({
      orderIsTap
    });
  },
  buttonTapNavigate(e) {
    const value = e.currentTarget.dataset.url;
    if (value.includes(".pdf")) {
      this.goToTerms(value);
    } else {
      const url = `redirect/redirect?url=${value}`;
      my.navigateTo({
        url
      });
    }
  },
  calcularDocumentoIdentidad() {
    const nit = this.data.nit.replace(/[^\d]/g, "");
    console.log("nit---->", nit);
    if (!isNaN(nit)) {
      const vpri = [3, 7, 13, 17, 19, 23, 29, 37, 41, 43, 47, 53, 59, 67, 71];
      const x =
        nit
          .split("")
          .reverse()
          .reduce((acc, val, i) => acc + val * vpri[i], 0) % 11;
      const digitoVerificacion = x > 1 ? 11 - x : x;

      this.setData({ digitoVerificacion: String(digitoVerificacion) });
    }
  }
});
