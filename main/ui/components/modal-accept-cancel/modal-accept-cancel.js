Component({
  props: {
    title: "",
    descriptionTitleVisible: true,
    descriptionTitle: "",
    content: "",
    visible: false,
    handleClose: () => {},
    primaryButtonText: "",
    secondaryButtonText: "",
    onAcceptButtonTap: () => {},
    onSecondaryButtonTap: () => {}
  },
  methods: {
    handleClose () {
      this.props.onClose();
    },
    onAcceptButtonTap () {
      this.props.onPrimaryButtonTap();
      this.handleClose();
    },
    onCancelButtonTap () {
      this.handleClose();
      this.props.onSecondaryButtonTap();
    }
  }
});
