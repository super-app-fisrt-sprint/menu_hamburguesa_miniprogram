module.exports = class deviceSpect {
  constructor(data) {
    this['X-SESSION-ID'] = data['X-SESSION-ID'];
    this['X-MC-LINE'] = data['X-MC-LINE'];
    this['X-MC-LOB'] = data['X-MC-LOB'];
    this['Content-Type'] = data['Content-Type'];
    this['X-MC-MAIL'] = data['X-MC-MAIL'];
    this['X-Carrier'] = data['X-Carrier'];
    this['X-Wifi'] = data['X-Wifi'];
    this['X-MC-HE-V'] = data['X-MC-HE-V'];
    this['X-MC-SO-V'] = data['X-MC-SO-V'];
    this['Cache-Control'] = data['Cache-Control'];
    this['X-MC-SO-API'] = data['X-MC-SO-API'];
    this['X-MC-SO-PHONE-F'] = data['X-MC-SO-PHONE-F'];
    this['X-MC-SO-PHONE-M'] = data['X-MC-SO-PHONE-M'];
    this['X-MC-APP-V'] = data['X-MC-APP-V'];
    this['X-MC-DEVICE-NAME'] = data['X-MC-DEVICE-NAME'];
    this['X-MC-DEVIDE-ID'] = data['X-MC-DEVIDE-ID'];
    this['X-MC-USER-AGENT'] = data['X-MC-USER-AGENT'];
  }
};