module.exports.CreateDeviceSpectInStorage = CreateDeviceSpectInStorage;
module.exports.GetDeviceSpectInStorage = GetDeviceSpectInStorage;

function CreateDeviceSpectInStorage(key, data) {
  try {
    my.setStorage({
      key: key,
      data: {
        "X-SESSION-ID": data["X-SESSION-ID"],
        "X-MC-LINE": data["X-MC-LINE"],
        "X-MC-LOB": data["X-MC-LOB"],
        "Content-Type": data["Content-Type"],
        "X-MC-MAIL": data["X-MC-MAIL"],
        "X-Carrier": data["X-Carrier"],
        "X-Wifi": data["X-Wifi"],
        "X-MC-HE-V": data["X-MC-HE-V"],
        "X-MC-SO-V": data["X-MC-SO-V"],
        "Cache-Control": data["Cache-Control"],
        "X-MC-SO-API": data["X-MC-SO-API"],
        "X-MC-SO-PHONE-F": data["X-MC-SO-PHONE-F"],
        "X-MC-SO-PHONE-M": data["X-MC-SO-PHONE-M"],
        "X-MC-APP-V": data["X-MC-APP-V"],
        "X-MC-DEVICE-NAME": data["X-MC-DEVICE-NAME"],
        "X-MC-DEVIDE-ID": data["X-MC-DEVIDE-ID"],
        "X-MC-USER-AGENT": data["X-MC-USER-AGENT"]
      }
    });
    return true;
  } catch (error) {
    return false;
  }
}

function GetDeviceSpectInStorage(key) {
  try {
    let res = my.getStorageSync({ key: key });
    return res.data;
  } catch (error) {
    return error;
  }
}
