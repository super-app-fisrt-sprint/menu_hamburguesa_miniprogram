Component({
  mixins: [],
  data: {
    position: 0,
    positionSlice: 0,
    width: 0,
    height: 0,
    buttonNext: "Siguiente",
    arrayTexts: [{
      text: "Ingresa a Soluciones móviles para consultar tus \n  consumos, el detalle de tu plan y activa el \n servicio de Roaming internacional",
      left: "15%",
      bottom: "131px"
    },
    {
      text: "En Soluciones fijas HFC encuentra los detalles \n  de tus servicios fijos, gestiona tus visitas \n  técnicas y personaliza tu red Wi-Fi",
      left: "45%",
      bottom: "131px"
    },
    {
      text: "Consulta y descarga todas tus facturas desde \n un solo lugar",
      left: "38px",
      bottom: "-7px"
    },
    {
      text: "Haz pagos múltiples de tus servicios y programa \n  tus pagos registrando tus tarjetas de crédito",
      left: "44%",
      bottom: "-7px"
    },
    {
      text: "Administra los perfiles de los usuarios de tu \n empresa o negocio para que accedan a la \n aplicación de Claro Empresas",
      left: "86%",
      bottom: "133px"
    }
    ],
    stepDescription: "",
    stepDescriptionTop: "",
    left: "",
    bottom: "",
    slicesStatus: ["active", "inactive", "inactive", "inactive", "inactive"]
  },
  props: {
    startTutorial: true,
    show: false,
    positionTop: 0,
    positionBottom: 0,
    onUpdatePosition () {},
    onUpdateTop () {},
    onUpdateBottom () {},
    onClose () {}
  },
  didMount () {
    this.setStorage();
    this.updateStepDescription();
    this.calculateValuesBasedOnHeight();
  },
  didUnmount () {},
  methods: {
    nextPosition () {
      if (this.data.position < 4) {
        this.setData({
          position: this.data.position + 1
        });
        this.updateStepDescription();
        this.props.onUpdatePosition(this.data.position);
        this.updateButtonLabel();
        this.updateSliceStatus();
      } else {
        this.closeTutorial();
      }
    },

    back () {
      if (this.data.position > 0) {
        this.setData({
          position: this.data.position - 1
        });
        this.updateStepDescription();
        this.props.onUpdatePosition(this.data.position);
        this.updateButtonLabel();
        this.updateSliceStatus(false);
      }
    },

    closeTutorial () {
      this.setData({
        position: 0,
        positionSlice: 0,
        slicesStatus: ["active", "inactive", "inactive", "inactive", "inactive"],
        buttonNext: "Siguiente",
        stepDescription: this.data.arrayTexts[0].text,
        left: this.data.arrayTexts[0].left,
        bottom: this.data.arrayTexts[0].bottom,
        stepDescriptionTop: ""
      })
      this.props.onClose();
    },

    setStorage () {
      my.setStorage({
        key: "onboarding",
        data: true
      });
    },

    updateStepDescription () {
      const descriptionKey = this.data.position >= 2 ? 'stepDescriptionTop' : 'stepDescription';
      this.setData({
        [descriptionKey]: this.data.arrayTexts[this.data.position].text,
        stepDescription: this.data.position < 2 ? this.data.arrayTexts[this.data.position].text : '',
        stepDescriptionTop: this.data.position >= 2 ? this.data.arrayTexts[this.data.position].text : '',
        left: this.data.arrayTexts[this.data.position].left,
        bottom: this.data.arrayTexts[this.data.position].bottom
      });
    },

    updateButtonLabel () {
      const label = this.data.position === 4 ? "Finalizar" : "Siguiente";
      this.setData({
        buttonNext: label
      });
    },

    updateSliceStatus (backward = true) {
      const increment = backward ? 1 : -1;
      let position = this.data.positionSlice + increment;
      position = position < 0 ? 0 : position;
      const slicesStatus = this.data.slicesStatus.map((status, index) => index === position ? "active" : "inactive");

      this.setData({
        slicesStatus,
        positionSlice: position
      });
    },
    async calculateValuesBasedOnHeight () {
      const positionTop = await this.props.onUpdateTop()
      const positionBottom = await this.props.onUpdateBottom()

      const bottom = -(positionTop - 100)
      const top = positionBottom - 60

      this.setData({
        bottomPopup: bottom,
        bottomPopupTop: top,
        bottomPopupTopLast: top - 40
      })
    }
  }
});
