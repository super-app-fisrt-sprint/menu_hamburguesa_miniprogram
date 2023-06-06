Page({
  onLoad() {
    const { titleBarHeight, statusBarHeight } = my.getSystemInfoSync();
    this.setData({
      titleBarHeight,
      statusBarHeight
    });
  },
  data: {
    access: [
      {
        icon: "/main/ui/assets/icons/consumo.svg",
        text: "Consulta\n consumos",
        appId: "3482020158910265"
      },
      {
        icon: "/main/ui/assets/icons/detalle.svg",
        text: "Detalle de\n tu plan",
        appId: ""
      },
      {
        icon: "/main/ui/assets/icons/paquetes.svg",
        text: "Compra de paquetes",
        appId: ""
      },
      {
        icon: "/main/ui/assets/icons/portafolio.svg",
        text: "Portafolio de soluciones",
        appId: ""
      },
      {
        icon: "/main/ui/assets/icons/pagos.svg",
        text: "Pagos\n en línea",
        appId: ""
      },
      {
        icon: "/main/ui/assets/icons/tramites.svg",
        text: "Información de tramites",
        appId: ""
      },
      {
        icon: "/main/ui/assets/icons/chat.svg",
        text: "Chat empresarial",
        appId: ""
      },
      {
        icon: "/main/ui/assets/icons/guia.svg",
        text: "Guía y novedades",
        appId: ""
      },
      {
        icon: "/main/ui/assets/icons/equipos.svg",
        text: "Devolución\n de equipos",
        appId: ""
      }
    ]
  },
navigateToMiniProgram(e) {
  const appId = e.target.dataset.appId;
  const index = e.target.dataset.index;
  console.log(`Navigating to mini program with appId: ${appId} at index: ${index}`);
  my.navigateToMiniProgram({
    appId: appId,
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
  onUnload() {}
});
