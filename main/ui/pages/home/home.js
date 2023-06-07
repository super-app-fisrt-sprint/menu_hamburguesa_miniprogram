Page({
  onLoad() {
    const { titleBarHeight, statusBarHeight } = my.getSystemInfoSync();
    this.setData({
      titleBarHeight,
      statusBarHeight
    });
  },
  data: {
    position: "",
    basicVisible: false,
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
        pageUrl: "/pages/test/test"
      },
      {
        iconAccess: "/main/ui/assets/icons/edit.svg",
        titleAccess: "Personalizar servicios",
        pageUrl: "/pages/test/test"
      },
      {
        iconAccess: "/main/ui/assets/icons/user.svg",
        titleAccess: "Gestion de la cuenta",
        pageUrl: "/pages/test/test"
      }
    ],
    footerItems: [
      {
        icon: "/main/ui/assets/icons/inicio.svg",
        title: "Inicio",
        pageUrl: "/pages/test/test"
      },
      {
        icon: "/main/ui/assets/icons/adquirir.svg",
        title: "Adquirir",
        pageUrl: "/pages/test/test"
      },
      {
        icon: "/main/ui/assets/icons/chat.svg",
        title: "Chat",
        pageUrl: "/pages/test/test"
      },
      {
        icon: "/main/ui/assets/icons/pedidos.svg",
        title: "Pedidos",
        pageUrl: "/pages/test/test"
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

  onUnload() {}
});
