const DeviceSpectRepository = require("../main/data/attributes/DeviceSpect/repository/DeviceSpectRepository");
const AutoRefreshRepository = require("../main/data/attributes/AutoRefreshToken/repository/AutoRefreshRepository");
const InfoDevice = require("../main/data/attributes/DeviceSpect/entities/DeviceSpect");
const RefreshTokenViewModel = require("../main/domain/RefreshTokenViewModel");
const { CreateInfoDeviceStorage, GetInfoDeviceStorage } = require("../main/domain/DeviceSpectViewModel");

// Mocked data
const mockData = {
  response: [
    {
      data: {
        response: {
          
        }
      }
    },
    {
      data: {
        response: {
          cuentas: [
            {
              token: "token123"
            }
          ],
          usuario: {
            nombre: "John",
            UserProfileID: "john@example.com",
            apellido: "Doe",
            DocumentNumber: "1234567890",
            DocumentType: "Passport"
          }
        }
      }
    }
  ]
};

const mockChangeValue = { success : true, data: null};

describe('CreateInfoDeviceStorage', () => {
  test('should update login info and headers',async () => {

    const tokenRepository = new AutoRefreshRepository();


    tokenRepository.changeHeaderLocal = jest.fn().mockResolvedValue(mockChangeValue);
    tokenRepository.changeInfoLoginLocal = jest.fn().mockResolvedValue(mockChangeValue);

    const result = await CreateInfoDeviceStorage(mockData);

    // Ensure the result indicates success
  

    // Check that login info is updated
    expect(RefreshTokenViewModel.changeValueInfo).toHaveBeenCalledWith("nombre", "John");
    expect(RefreshTokenViewModel.changeValueInfo).toHaveBeenCalledWith("email", "john@example.com");
    expect(RefreshTokenViewModel.changeValueInfo).toHaveBeenCalledWith("apellido", "Doe");
    expect(RefreshTokenViewModel.changeValueInfo).toHaveBeenCalledWith("DocumentNumber", "1234567890");
    expect(RefreshTokenViewModel.changeValueInfo).toHaveBeenCalledWith("DocumentType", "Passport");

    // Check that headers are updated
    expect(RefreshTokenViewModel.changeValueHeader).toHaveBeenCalledWith("X-SESSION-ID", "token123");
    expect(RefreshTokenViewModel.changeValueHeader).toHaveBeenCalledWith("X-MC-MAIL", "john@example.com");  
    expect(result.success).toBe(true);
  });

  test('should handle error', () => {
    // Mock an error during data update
    RefreshTokenViewModel.changeValueInfo.mockImplementation(() => {
      throw new Error('Error updating info');
    });

    const result = CreateInfoDeviceStorage(mockData);

    // Ensure the result indicates failure
    expect(result.success).toBe(false);
  });
});

describe('GetInfoDeviceStorage', () => {
  test('should get info device from storage', () => {
    // Mock the GetDeviceSpectSourceLocal function
    DeviceSpectRepository.GetDeviceSpectSourceLocal.mockReturnValue(new InfoDevice(/* mock info */));

    const response = GetInfoDeviceStorage();

    // Ensure the response is an instance of InfoDevice
    expect(response).toBeInstanceOf(InfoDevice);
  });

  test('should handle error', () => {
    // Mock an error during data retrieval
    DeviceSpectRepository.GetDeviceSpectSourceLocal.mockImplementation(() => {
      throw new Error('Error retrieving info device from storage');
    });

    const response = GetInfoDeviceStorage();

    // Ensure the response is null
    expect(response).toBeNull();
  });
});