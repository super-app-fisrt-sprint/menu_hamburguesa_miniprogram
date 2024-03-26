function myAppsFlayer(nameEvent) {
  my.call("AFLogEvent", {
    name: nameEvent,
    parameters: {
      af_price: 26,
      af_currency: "usd"
    }
  });
}

function myFirebase(nameEvent) {
  my.call("FIRLogEvent", {
    nameEvent,
    parameters: {}
  });
}

module.exports = {myFirebase, myAppsFlayer};
