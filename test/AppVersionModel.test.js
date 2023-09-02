const ResponseAppVersion = require("../main/data/attributes/AppVersion/entities/Version");
const AppVersionRepository = require("../main/data/attributes/AppVersion/repository/GetAppVersionRepository");
const { getAppVersion } = require("../main/domain/AppVersionViewModel");

it('Debería devolver una respuesta exitosa con la versión de aplicación correcta', async () => {
  // Arrange
  const mockDeviceSpect = {};
  const mockAppVersionRepository = new AppVersionRepository();
  const mockAppVersion = new ResponseAppVersion("15.7.0", "android");
  const expectedResponse = { data: '{"mensaje":"Ok"}', success: true };
  mockAppVersionRepository.getAppVersionList = jest.fn().mockResolvedValue({ data: '{"mensaje":"Ok"}' });

  // Act
  const result = await getAppVersion(mockDeviceSpect, mockAppVersion);

  // Assert
  expect(mockAppVersionRepository.getAppVersionList).toHaveBeenCalledWith(mockDeviceSpect, mockAppVersion);
  expect(result).toEqual(expectedResponse);
});

// Pruebas que GetAppVersion devuelve un objeto de resultado con éxito = true y data = res.data cuando la versión de la aplicación se recupera correctamente
it('debe devolver un objeto de resultado con éxito = true y data = res.data cuando la versión de la aplicación se recupere correctamente', async () => {
  // Arrange
  const mockDeviceSpect = {};
  const mockAppVersionRepository = new AppVersionRepository();
  const mockAppVersion = new ResponseAppVersion("15.7.0", "android");
  const expectedResponse = { data: '{"mensaje":"Ok"}', success: true };
  mockAppVersionRepository.getAppVersionList = jest.fn().mockResolvedValue({ data: '{"mensaje":"Ok"}' });

  // Act
  const result = await getAppVersion(mockDeviceSpect, mockAppVersion);

  // Assert
  expect(mockAppVersionRepository.getAppVersionList).toHaveBeenCalledWith(mockDeviceSpect, mockAppVersion);
  expect(result).toEqual(expectedResponse);
});

// Tests that getAppVersion returns a result object with success=false and data="No se pudo obtener la version correcta del app" when app version is not retrieved successfully
it('Debe devolver un objeto de resultado con éxito = falso y data = "no se pudo obtener la versión correcta del aplicación" cuando la versión de la aplicación no se recupera correctamente', async () => {
  // Arrange
  const mockDeviceSpect = {};
  const mockAppVersionRepository = new AppVersionRepository();
  const mockAppVersion = new ResponseAppVersion("15.7.0", "android");
  const expectedResponse = { data: "No se pudo obtener la version correcta del app", success: false };
  mockAppVersionRepository.getAppVersionList = jest.fn().mockResolvedValue({ data: '{"mensaje":"Error"}' });

  // Act
  const result = await getAppVersion(mockDeviceSpect, mockAppVersion);

  // Assert
  expect(mockAppVersionRepository.getAppVersionList).toHaveBeenCalledWith(mockDeviceSpect, mockAppVersion);
  expect(result).toEqual(expectedResponse);
});
