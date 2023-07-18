const DeviceSpectViewModel = require("../../../domain/DeviceSpectViewModel");
const AppVersionViewModel = require("../../../domain/AppVersionViewModel");

Page({
  onLoad() {
    //Cargo info y headers
    const deviceString = `{"X-SESSION-ID":
      "U2FsdGVkX1/qFo4mzwOB2Zdwn0Q5ZisOJW6nayt0UzuuRjoR2G9KtE39omStTlcYNNZEgcVgSYPZiNT/VObQJRvxLRs/MIcUnI8LCTaUl6ALJGo+7nFSUR0Q+c3WFABWJoDuye7YMW0PjC/gwH/TEVhv2m5GfxNwFCnHYL3MoG0Rlgjt0GsR8wpepRSG3vsk/GGFAU1TY1w7Fw56pXhPirH34Xq7/raM1Ka32umj0zQ/5T261DVrlGjVWpC/5a93ANqkyDqb8j8XwixxV9xgBu3w9GOqFxUGUMdaZdDtG8BSpjInsXcn+R2xqf3SVtxlB8ueJtEi2G4FSMB28CmPHMzRtwcqZrTA/Fw42huGqDCcSOu8ptf6a4kKfQY6aMVSFMZcgGxo1NMK470RFBu8X6FAN11M7ZMs4ATctGydZtTu4MhBBEvm4ytm/l0R/xzsUakmZvqKLN8Er4yNkEImklbKXb/Tr7BU01ST1TwPRJ+ZgBl/Zd8fAgAyudV4ZGhtG1bhTWYGqCoGxaTDuGWtdEwWFTOeB3D1qB91kvSrb20=",
      "X-MC-LINE": "3103815747",
      "X-MC-LOB": "3",
      "Content-Type": "application/json; charset=UTF-8",
      "X-MC-MAIL": "angie.copete@neoris.com",
      "X-MC-SO": "android",
      "X-Carrier": "claro",
      "X-Wifi": true,
      "X-MC-HE-V": "3",
      "X-MC-SO-V": "9",
      "Cache-Control": "no-cache",
      "X-MC-SO-API": "28",
      "X-MC-SO-PHONE-F": "samsung",
      "X-MC-SO-PHONE-M": "SM-S908E",
      "X-MC-APP-V": "15.4.0",
      "X-MC-DEVICE-NAME": "samsungSM-S908E",
      "X-MC-DEVICE-ID":
      "qHn4rb8ClcRJ77whz5G97xXIzozYi9w0+hNsxpprHNsHxRO8zhdcekO2ETZs4UXX7zH/0RDm1o2J6wWMCy25Tiesg4BTYY94GkNK+EUdVGmDkHbknYAEoQROQmcC+ROKfmEXh/YzxDnm+MnIL7lX0nLNdLhp2WYSxDHUKfpUijs=",
      "X-MC-USER-AGENT":
      "eyJpcCI6IjE5Mi4xNjguMjMzLjE3MiIsInVzZXJBZ2VudCI6Ik1pQ2xhcm9BcHAvMC4wLjEgKHNhbXN1bmc7IFNNLUc5ODhOOyBcdTAwM2NhbmRyb2lkLzlcdTAwM2UpIn0="
    }`;
    //charge info login User in storage
    DeviceSpectViewModel.CreateInfoDeviceStorage(deviceString);

    const { titleBarHeight, statusBarHeight } = my.getSystemInfoSync();
    this.setData({
      titleBarHeight,
      statusBarHeight
    });
    // let deviceSpect = DeviceSpectViewModel.GetInfoDeviceStorage();
  },
  data: {
    position: "",
    basicVisible: false,
    modalVisible: false,
    urlTerms:
      "https://tienda.claro.com.co/wcsstore/Claro/images/contenidos/Terminos%20y%20Condiciones.pdf",
    access: [
      {
        icon: "/main/ui/assets/icons/moviles.svg",
        text: "Soluciones \nmóviles",
        appId: "3482020158910265"
      },
      {
        icon: "/main/ui/assets/icons/banda-ancha.svg",
        text: "Red banda \nancha (HFC)",
        appId: ""
      },
      {
        icon: "/main/ui/assets/icons/fibra-optica.svg",
        text: "Red de\nfibra óptica",
        appId: ""
      },
      {
        icon: "/main/ui/assets/icons/historial.svg",
        text: "Historial\nde facturas",
        appId: ""
      },
      {
        icon: "/main/ui/assets/icons/pagos.svg",
        text: "Administrar\npagos",
        appId: ""
      },
      {
        icon: "/main/ui/assets/icons/equipos.svg",
        text: "Equipos\nfinanciados",
        appId: ""
      }
    ],
    menuAccess: [
      {
        iconAccess: "/main/ui/assets/icons/users.svg",
        titleAccess: "Administrar perfiles",
        pageUrl: "/main/ui/pages/index/index"
      },
      {
        iconAccess: "/main/ui/assets/icons/edit.svg",
        titleAccess: "Personalizar servicios",
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
        icon: "/main/ui/assets/icons/inicio.svg",
        title: "Inicio",
        pageUrl: "/pages/index/index",
        isActive: true
      },
      {
        icon: "/main/ui/assets/icons/adquirir.svg",
        title: "Adquirir",
        pageUrl: "/pages/index/index",
        isActive: false
      },
      {
        icon: "/main/ui/assets/icons/chat.svg",
        title: "Chat",
        pageUrl: "/pages/index/index",
        isActive: false
      },
      {
        icon: "/main/ui/assets/icons/pedidos.svg",
        title: "Pedidos",
        pageUrl: "/pages/index/index",
        isActive: false
      }
    ]
  },

  navigateToMiniProgram(e) {
    const appId = e.target.dataset.appId;
    const index = e.target.dataset.index;
    console.log(
      `Navigating to mini program with appId: ${appId} at index: ${index}`
    );
    my.navigateToMiniProgram({
      appId,
      path: "pages/home/home",
      extraData: {
        data1: "test"
      },
      success(res) {
        console.log("Navigated to mini program successfully", res);
      },
      fail(err) {
        console.error("Failed to navigate to mini program", err);
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
    const { index } = e.currentTarget.dataset;
    const { footerItems } = this.data;
    footerItems.forEach((item, i) => {
      item.isActive = i === index;
    });
    this.setData({
      footerItems: footerItems
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
            console.log("Archivo PDF abierto correctamente");
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
  },
  handleClose() {
    this.setData({
      modalVisibleDescription: false,
      modalVisible: true,
      basicVisible: true
    });
  },
  onCancelButtonTap() {
    console.log("Cancelar");
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
    console.log("Entrando");
    this.setData({
      modalVisible: true
    });
  },
  onSignOut() {
    let deviceSpect = DeviceSpectViewModel.GetInfoDeviceStorage();
    AppVersionViewModel.getAppVersion(deviceSpect).then(res => {
      if (res.success) {
        my.reLaunch({
          url: "/main/ui/pages/index/index"
        });
      } else {
        console.error("Page error");
      }
    });
  },

  onUnload() {}
});
