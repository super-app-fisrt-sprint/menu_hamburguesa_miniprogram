const BannerListRepository = require("../data/attributes/BannerListService/repository/BannerListserviceRepository");
const BannerList = require("../data/attributes/BannerListService/entities/BannerListServiceCategory");

/**
 * Recupera una lista de banners de un repositorio remoto según la especificación del dispositivo proporcionada como entrada.
 * @param {Object} deviceSpec: la especificación del dispositivo.
 * @returns {Objeto|boolean}: los datos del banner asignado o falso si se produce un error o los datos de respuesta no son válidos.
 */

async function ApiBannerList (deviceSpec) {
  const bannerListRepository = new BannerListRepository();
  const dataBanner = new BannerList();
  try {
    const res = await bannerListRepository.getBannerListRemote(deviceSpec);
    if (
      res &&
      res.data &&
      res.data.response &&
      res.data.response !== null &&
      res.data.response !== undefined &&
      res.data.error === 0
    ) {
      dataBanner.data = res.data.response.map(({ name, url, image }) => ({
        name,
        url,
        image
      }));
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
  return dataBanner;
}

module.exports.ApiBannerList = ApiBannerList;
