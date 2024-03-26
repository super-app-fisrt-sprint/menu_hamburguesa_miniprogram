Component({
  data: {},
  props: {
    image: '',
    style: '',
    onTap: () => {}
  },
  didMount () {
    this.$page.headerImage = this;
  },
  methods: {
    onNav (e) {
      this.props.onTap(e);
    }
  }
});
