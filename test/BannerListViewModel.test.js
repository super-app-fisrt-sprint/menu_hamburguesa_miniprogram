const BannerListViewModel = require("../main/domain/BannerListViewModel");
const BannerList = require("../main/data/attributes/BannerListService/entities/BannerListServiceCategory");
const BannerListRepository = require("../main/data/attributes/BannerListService/repository/BannerListserviceRepository");

describe("Set de pruebas para empresas videos", () => {
  test("Prueba de recuperación exitosa de Banner List", async () => {
    const bannerListRepository = new BannerListRepository();
    const mockResponse = {
      data: {
        error: 0,
        response: [
          {
            id: 238,
            name: "zn-empresas-banner_cambios_marcaci_n.jpg",
            isMobile: 1,
            idSection: 8,
            url: "https://apiselfservice.co/archivos/tut_cambio_marcacion.html",
            isActive: 1,
            dateCreation: "2021-10-29 14:13:17",
            newDesing: 1,
            target:
              "https://apiselfservice.co/archivos/tut_cambio_marcacion.html",
            image:
              "https://apiselfservice.co/archivos/banners/movil/zn-empresas-banner_cambios_marcaci_n.jpg?v=20230606_191506",
            esInterno: false,
            modulo: null,
            orden: 1,
            fechaInicio: null,
            fechaFin: null,
            so: null,
            nuevo: 1
          },
          {
            id: 311,
            name: "zp_empresas_banner_terminos_y_condiciones.png",
            isMobile: 1,
            idSection: 8,
            url:
              "https://docs.google.com/gview?embedded=true&url=https://apiselfservice.co/archivos/tyc/tyc_empresas.pdf",
            isActive: 1,
            dateCreation: "2023-01-06 17:21:24",
            newDesing: 1,
            target:
              "https://docs.google.com/gview?embedded=true&url=https://apiselfservice.co/archivos/tyc/tyc_empresas.pdf",
            image:
              "https://apiselfservice.co/archivos/banners/movil/zp_empresas_banner_terminos_y_condiciones.png?v=20230606_191506",
            esInterno: false,
            modulo: "url_externo_sincobro",
            orden: 3,
            fechaInicio: null,
            fechaFin: null,
            so: null,
            nuevo: 1
          }
        ]
      }
    };
    const spy = jest
      .spyOn(bannerListRepository, "getBannerListRemote")
      .mockResolvedValue(mockResponse);
    const result = await BannerListViewModel.ApiBannerList();
    expect(spy).toHaveBeenCalled();
    expect(result).toEqual(new BannerList(mockResponse.data.response));
  });

  test("Prueba de recuperación fallida Banner List", async () => {
    const bannerListRepository = new BannerListRepository();
    const mockResponse2 = {
      data: {
        error: 1,
        response: null
      }
    };
    const spy = jest
      .spyOn(bannerListRepository, "getBannerListRemote")
      .mockResolvedValue(mockResponse2);
    const result = await BannerListViewModel.ApiBannerList();
    expect(spy).toHaveBeenCalled();
    expect(result).toEqual(false);
  });

  test("comprobar la correcta gestión de los errores detectados", async () => {
    const bannerListRepository = new BannerListRepository();
    jest.spyOn(bannerListRepository, "getBannerListRemote").mockRejectedValue(new Error("Error"));
    const result = await BannerListViewModel.ApiBannerList();
    expect(result).toEqual(false);
  });
});
