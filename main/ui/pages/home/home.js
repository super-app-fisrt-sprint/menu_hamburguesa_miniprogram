const DeviceSpectViewModel = require("../../../domain/DeviceSpectViewModel");
const AppVersionViewModel = require("../../../domain/AppVersionViewModel");
const RefreshTokenViewModel = require("../../../domain/RefreshTokenViewModel");
const { getUrlClaroVentas } = require("../../../domain/ClaroVentasViewModel")
Page({
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
        pageUrl: "main/ui/pages/manageProfiles/manageProfiles",
        appId: "3482020174685949"
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
      }

    ]
  },
  onLaunch () {
    const { query, referrerInfo: { extraData } = {} } = my.getLaunchOptionsSync();
    // const { query, referrerInfo: { extraData } = {} } = options;
    my.alert({
      title: 'Prueba data',
      content: `query: ${JSON.stringify(query) || ''}\nextraData: ${JSON.stringify(extraData) || ''}`
    });
  },
  onLoad () {
    const infoLogin = my.getStorageSync({ key: "N_USER_INFO_LOGIN" });

    const deviceSpect = DeviceSpectViewModel.getInfoDeviceStorage();
    // Services GETANYMACCLIST and GETCOUNTMASTERLINES

    RefreshTokenViewModel.refreshToken(deviceSpect).then((refreshResult) => {

    });

    this.setData(
      {
        nit: infoLogin.data.DocumentNumber,
        nombre: infoLogin.data.nombre,
        tipoDocumento: this.DocumentType(infoLogin.data.DocumentType)
      })

    my.setNavigationBar({
      title: ""
    });
  },
  /**
   *Convierte un tipo de documento numérico en su representación de cadena correspondiente.
   *
   * @param {number} type - La representación numérica del tipo de documento.
   * @returns {string} - La representación de cadena del tipo de documento.
   */
  DocumentType (type) {
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
  /**
   * Navega a un mini programa dentro de la aplicación Alipay.
   * @param {object} e - El objeto de evento que contiene el elemento de destino y su conjunto de datos.
   * @param {string} e.target.dataset.appId - La identificación del mini programa.
   * @param {string} e.target.dataset.pageUrl - La URL de la página Mini del Programa.
   */
  navigateToMiniProgram (e) {
    const appId = e.target.dataset.appId;
    const pageUrl = e.target.dataset.pageUrl;

    const extraData = my.getStorageSync({ key: 'extraData' }).data || {};
    const dataMiniprogram = extraData.response;

    my.navigateToMiniProgram({
      appId,
      path: pageUrl,
      extraData: { response: dataMiniprogram },
      success (res) {

      },
      fail (err) {
      }
    });
  },
  /**
   *Maneja el evento cuando se muestra el menú.
   * Establece la posición y las propiedades BasicVisible en el objeto de datos para controlar la visibilidad del menú.
   *
   * @param {Object} e - El objeto de evento que contiene el conjunto de datos de destino con la propiedad de posición.
   * @returns {void}
   */
  handleShowMenu (e) {
    const { position } = e.target.dataset;
    this.setData({
      position,
      basicVisible: true
    });
  },
  /**
   *Cierra la ventana emergente configurando la propiedad de datos 'BasicVisible` en `falso'.
   */
  handlePopupClose () {
    this.setData({
      basicVisible: false
    });
  },
  /**
   * Este método se activa cuando se hace clic en un icono.Recupera el índice, pageUrl y appid del conjunto de datos del icono hecho hecho hecho.
   * Luego recupera extradatos del almacenamiento y lo asigna a DataMiniprogram.
   * Finalmente, navega a un mini programa utilizando el AppID, PageUrl y Dataminiprogram recuperados.
   * @param {object} e - El objeto de evento que contiene el elemento de destino y su conjunto de datos.
   */
  onIconClick (e) {
    const { index } = e.target.dataset;
    const { pageUrl, appId } = this.data.menuAccess[index];

    const extraData = my.getStorageSync({ key: 'extraData' }).data || {};
    const dataMiniprogram = extraData.response;

    my.navigateToMiniProgram({
      appId,
      path: pageUrl,
      extraData: { response: dataMiniprogram },
      success (res) {
      },
      fail (err) {
      }
    });
  },
  /**
   * Se desencadena cuando se hace clic en un artículo de pie de página.
   * @param {object} e - El objeto de evento que contiene los datos del elemento hecho.
   */
  onFooterItemClick (e) {
    const { index, appId, path } = e.currentTarget.dataset;
    const { footerItems } = this.data;
    if (index === 1) {
      this.purchaseProduct();
    } else {
      my.navigateToMiniProgram({
        appId,
        path,
        extraData: {
          data1: "test"
        },
        success: function (res) {
        },
        fail: function (err) {
        }
      });
    }
    this.setData({
      footerItems
    });
  },
  /**
   * Establece la propiedad `showloading` en el objeto` data` a `verdadero '.
   */
  showLoadings () {
    this.setData({
      showLoading: true
    });
  },
  /**
   * Este método se utiliza para ocultar el indicador de carga configurando la propiedad `showloading` en el objeto` data` a `falso '.
   */
  hideLoading () {
    this.setData({
      showLoading: false
    });
  },
  /**
   *Abre un documento PDF de una URL dada.
   */
  goToTerms () {
    const { urlTerms } = this.data;
    my.downloadFile({
      url: urlTerms,
      success ({ apFilePath }) {
        my.openDocument({
          fileType: "pdf",
          filePath: apFilePath,
          success () {

          },
          fail (res) {
            my.alert({
              content: res.errorMessage || res.error
            });
          }
        });
      }
    });
  },
  /**
   * Actualiza el estado de las propiedades ModalVisibbledescription, ModalVisible y BasicVisible para controlar la visibilidad del modal.
   */
  handleClose () {
    this.setData({
      modalVisibleDescription: false,
      modalVisible: true,
      basicVisible: true
    });
  },
  /**
   * Llamado cuando se toca el botón Cancelar.Redirige al usuario a la página de inicio y oculta el modal.
   */
  onCancelButtonTap () {
    my.redirectTo({
      url: '/main/ui/pages/home/home'
    });
    this.setData({
      modalVisible: false
    });
  },
  /**
   *Llamado cuando el usuario aprovecha el botón de aceptar en un modal.
   * Redirige al usuario a los servicios de inicio de sesión y oculta el modal.
   */
  onAcceptButtonTap () {
    this.redirectLoginServices();
    this.setData({
      modalVisible: false
    });
  },
  /**
   * Establece la propiedad 'modalVisible` en el objeto de datos a `true', que controla la visibilidad de un modal.
   */
  handleOpenModal () {
    this.setData({
      modalVisible: true
    });
  },
  /**
   * El método `Onsignout` se llama cuando el usuario desea cerrar la aplicación.
   * Realiza algunas acciones antes de volver al programa Mini anterior.
   */
  onSignOut () {
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
  /**
   * Abre una URL en la aplicación Alipay.
   */
  purchaseProduct () {
    const url = getUrlClaroVentas();
    my.call('openUrl', {
      url
    }).then((values) => {
    }).catch((value) => {
    })
  },
  onUnload () { }
});
