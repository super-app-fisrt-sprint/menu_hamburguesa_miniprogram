const DeviceSpectViewModel = require("../../../domain/DeviceSpectViewModel");
const AppVersionViewModel = require("../../../domain/AppVersionViewModel");
const RefreshTokenViewModel = require("../../../domain/RefreshTokenViewModel");

Page({
  onLaunch() {
    const { query, referrerInfo: { extraData } = {} } = my.getLaunchOptionsSync();
    // const { query, referrerInfo: { extraData } = {} } = options;
    my.alert({
      title: 'Prueba data',
      content: `query: ${JSON.stringify(query) || ''}\nextraData: ${JSON.stringify(extraData) || ''}`
    });
  },
  onLoad() {
    const infoLogin = my.getStorageSync({ key: "N_USER_INFO_LOGIN" });
    const { titleBarHeight, statusBarHeight } = my.getSystemInfoSync();

    const deviceSpect = DeviceSpectViewModel.getInfoDeviceStorage();
    // Services GETANYMACCLIST and GETCOUNTMASTERLINES

    RefreshTokenViewModel.refreshToken(deviceSpect).then((refreshResult) => {

    });

    this.setData(
      {
        nit: infoLogin.data.DocumentNumber,
        nombre: infoLogin.data.nombre
      })

    this.setData({
      titleBarHeight,
      statusBarHeight
    });
    my.setNavigationBar({
      title: ""
    });
  },
  data: {
    nit: "",
    nombre: "",
    position: "",
    basicVisible: false,
    modalVisible: false,
    showLoading: "",
    urlTerms:
      "https://miclaroempresas.com.co/documents/330416/0/Condiciones+Legales+de+Acceso+a+Mi+Claro+Empresas.pdf",
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
        pageUrl: "/main/ui/pages/index/index"
      },
      {
        iconAccess: "/main/ui/assets/icons/user.svg",
        titleAccess: "Gestión de la cuenta",
        pageUrl: "/main/ui/pages/index/index"
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
        path: "/main/ui/pages/chatService/chatService"
      },
      {
        icon: "/main/ui/assets/icons/pedidos.svg",
        iconActive: "/main/ui/assets/icons/pedidos-active.svg",
        title: "Pedidos",
        pageUrl: "/pages/index/index",
        isActive: false,
        appId: "3482020173097468",
        path: "/main/ui/pages/orders/orders"
      },

    ],
  },

  navigateToMiniProgram(e) {
    const appId = e.target.dataset.appId;
    const pageUrl = e.target.dataset.pageUrl;



    const extraData = my.getStorageSync({ key: 'extraData' }).data || {};
    const dataMiniprogram = extraData.response;


    my.navigateToMiniProgram({
      appId,
      path: pageUrl,
      extraData: { response: dataMiniprogram },
      success(res) {

      },
      fail(err) {

      }
    });
  },
  handleShowMenu(e) {
    const { position } = e.target.dataset;
    this.setData({
      position,
      basicVisible: true
    });
  },
  handlePopupClose() {
    this.setData({
      basicVisible: false
    });
  },
  onIconClick(e) {
    const index = e.target.dataset.index;
    const pageUrl = this.data.menuAccess[index].pageUrl;
    my.navigateTo({ url: pageUrl });
  },
  onFooterItemClick(e) {
    const { index, appId, path } = e.currentTarget.dataset;
    const { footerItems } = this.data;
    footerItems.forEach((item, i) => {
      item.isActive = i === index;
    });
    my.navigateToMiniProgram({
      appId: appId,
      path: path,
      extraData: {
        data1: "test"
      },
      success: function (res) {
        console.log(res);
      },
      fail: function (err) {
        console.log(err);
      }
    });
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
          success() {

          },
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
      url: '/main/ui/pages/home/home'
    });
    this.setData({
      modalVisible: false
    });
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
  },
  onSignOut() {
    this.showLoadings();
    const deviceSpect = DeviceSpectViewModel.getInfoDeviceStorage();
    AppVersionViewModel.getAppVersion(deviceSpect).then(res => {
      this.hideLoading();
      my.navigateBackMiniProgram({
        extraData: {
          data1: "test"
        },
        success: (res) => {

        },
        fail: (res) => {

        }
      });
    });
  },

  onUnload() { }
});
