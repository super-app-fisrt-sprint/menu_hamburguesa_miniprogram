const RefreshTokenViewModel = require("../../../../../main/domain/RefreshTokenViewModel");

App({
  onShow (options) {
    const enviromentDev = true;

    const { query, referrerInfo: { extraData } = {} } = my.getLaunchOptionsSync();

    const receivedData = enviromentDev ? JSON.parse(this.mockResponse) : extraData;

    let headersUpdated;

    if (receivedData) {
      // DevicesSpect
      headersUpdated = RefreshTokenViewModel.changeValueHeader(
        "X-SESSION-ID",
        receivedData.response[1].data.response.cuentas[0].token
      );
      headersUpdated = RefreshTokenViewModel.changeValueHeader(
        "X-MC-MAIL",
        receivedData.response[1].data.response.usuario.UserProfileID
      );

      // LoginInfo
      const usuario = receivedData.response[1].data.response.usuario;
      headersUpdated = RefreshTokenViewModel.changeValueInfo("nombre", usuario.nombre);
      headersUpdated = RefreshTokenViewModel.changeValueInfo("email", usuario.UserProfileID);
      headersUpdated = RefreshTokenViewModel.changeValueInfo("apellido", usuario.apellido);
      headersUpdated = RefreshTokenViewModel.changeValueInfo("DocumentNumber", usuario.DocumentNumber);
      headersUpdated = RefreshTokenViewModel.changeValueInfo("DocumentType", usuario.DocumentType);

      RefreshTokenViewModel.refreshToken(headersUpdated).then(() => {});
    }
  },

  mockResponse:
    '{"response":[true,{"data":{"error":0,"response":{"usuario":{"correoClaro":"miclaroapp@claro.com.co","nombre":"Jairo","apellido":"Contreras Pedreros","UserProfileID":"pruebas.ott.empresa@gmail.com","DocumentNumber":"80497359","DocumentType":"1","claveTemporal":0,"esUsuarioInspira":0,"esSolicitarRegistro":0,"esCambioNombreUsuario":0,"esCorreoTemporal":0,"roleID":"1","tipoClienteID":"2","tipoUsuarioID":"2","tokenSSO":"fjtdd95c513vp1t64kcnadpsj4674mcv19egvqs22ii13vsr04rh4qrkn3bdcgvni6ovdj64dvsnhqa11unsme55ia5jvbual1bq66pspvhckfndtohji6ad0r24ims9hmbg0nccv9etd1q6dd5a7l4vr64inn0kidnfojoh3kjntuou5cb6tbdac8e4uo6s30aqaopeo3e3a","fechaUltimoAcceso":"2023/09/06 16:26:17","doValidation":false,"esMedicionAprobada":true,"UID":"{39175FB8-A4B4-7A2B-1432-97E4D439AF9D}"},"cuentas":[{"LineOfBusiness":"","AccountId":"","custcode":"","accountIdHEader":"","alias":"","token":"U2FsdGVkX19mdikwf+K47Xs5sn+tiPReQODldWU9PF56Rjn7GkQbjd0KX77sHFCHEWMNoXG/34KHvOSqWp6Oc+pdkyNDVS2wpx4ObKJFwQemEkjYp9NaR0UDk7mZMcYlyVfVu4oa2t0h/QQ4kTtxHQDtQy7cq1L6trh71NVbEQXaKZerSYNBJVgBC+xudNY2IK8fxWHpccH6wENkZohzgZfoAXWuz7y7U1hfmd/keaCEJ3YxdUQTZ3/z4m6EBWJv6fIZd2e10C1J7EeMJvCIMFSQkaQBPtmAESnKa3+UgZbbhtFyWsGcsdq9IftGi6piMYtSnKCgGEywojMFhitPdqAESz+tGCTQnmgrSDTC8MMv0KaoVIgTG+aJsIKlQ4a966wKrjydlGoPPt2GGKMgCD5cITV9Qsm9kPfHlqKxlkSLwAwwjAw++mmDI3h0Jk00NXqKiFrxOy/LefHnzAsxaHWn/7TI+iXX1k36nkofwtkeXvmRnca4GeDDwz7JWj2N5nDhcJug8IqYim8b/V8Wzmi4/zaVze1qfyZiXTzAOBDpmj2EWAUdzNRa2gmz3GftSVwsGumCpywh2mQLZLDyhkJF/QjU6jsh8wERh8v+f0fkGFRwRXuhmpZDp/bgBv9ayWNCjyTbPmx0hoJ3lTMmg2HkU+wL0IfMx0DAg/i3dH2QsQka2ebdqbO+JzbtYtTqnAhpV+pGlXKr0XAT1NEp3KO1U0DLbZDdBUg0j0Tw4mL9EkWKESHkhGP+HsUpQIvLwcxGXJxk0ZZhVNw5v8Vu/Z7g/QZ6xiVsMczc+IyzOPzDUNW3Jh25LxS1hT0k4jWfQ4E4bCFa+dC2oqkE0jLuc0kZff2vor487ajDL3OUuKAYmNCYhEzuG5e8ZZXsv51oYEPHqzOOojqKDo+RljytyvQACKeQNmD2wGOsVuvzJtPXs6NmT2m0wOD8BmHxXezSMwrWihbkBdSV721vUF7wQFOXRyfzSJVRsRTwgRtn+HrQ2IzszfrmWEPdMc2JV0E0rUXmIn9o3z4bJYkDCwXG6kZC3MAhUlhrz+PO91gyuY9g4GHpccVGaHn2Hb4Y+HPruAAk5TnmNIrRXDTuMnovynBYX+TSmohI/YwP2jZ9k5zhGsXN8243LmcGTwITkzqgccSlQ+gUhANVc1ZQ7/VFLrkN60cvJBLkrWA3Y+cCmPxls2R5XmE5V3WmSJWBLFuy9+HY4LRT0+c//C4k6mTKovr3J59xUlucXaSdwFPS/1ohl4Gj2QJf++pVoJOr/yCCtzUvuJcv1pBA7H+k8y50N6ZTSs2+H39tOCv4/QaV0NL+N+VBFUBg1kaDKwyiUKJ9a8heIkktdsPCwmyWm1iMsPA59f93XulyBVvtmNpQplw="}]},"srv_nodo":"10.3.0.4","secs":"00:00:01.2560","server":"10.3.0.4"},"status":200,"headers":{"date":"Wed, 06 Sep 2023 22:39:41 GMT","server":"Apache","content-security-policy":"frame-ancestors http://*.nip.io/ \'self\' www.miclaroapp.com.co miclaroapp.com.co www.claroaparatiprimero.co claroparatiprimero.co www.apiselfservice.co apiselfservice.co https://servidorclaro-cristianfuentes.c9users.io/ https://www.claro.com.co/ https://miclaroweb-fabricadigital.codeanyapp.com/ sscoqa.tmx-internacional.net www.miclaro.com.co http://aplicaciones.claro.com.co/ http://52.73.130.145/ http://54.82.32.88/;","x-xss-protection":"1; mode=block","x-frame-options":"SAMEORIGIN","x-content-type-options":"nosniff","referrer-policy":"unsafe-url","access-control-allow-origin":"*","access-control-allow-headers":"Access-Control-Allow-Headers, Access-Control-Allow-Methods, X-API-KEY,  X-SESION-ID, X-SESSION-ID, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method, authorization","access-control-allow-methods":"GET, POST, OPTIONS, PUT, DELETE","content-length":"2319","connection":"close","content-type":"application/json"},"profile":{"domainLookup":0,"connect":67,"SSLconnection":138,"Waiting":1666,"totalTime":1873,"socketReused":false,"protocol":"http/1.1"}}]}'
});
