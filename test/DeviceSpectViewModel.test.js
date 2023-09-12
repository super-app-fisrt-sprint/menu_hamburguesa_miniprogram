const DeviceSpectRepository = require("../main/data/attributes/DeviceSpect/repository/DeviceSpectRepository");
const AutoRefreshRepository = require("../main/data/attributes/AutoRefreshToken/repository/AutoRefreshRepository");
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
const mockChangeValue = { success: true, data: null };

describe('CreateInfoDeviceStorage', () => {
  test('should update login info and headers', async () => {
    const tokenRepository = new AutoRefreshRepository();

    tokenRepository.changeHeaderLocal = jest.fn().mockResolvedValue(mockChangeValue);
    tokenRepository.changeInfoLoginLocal = jest.fn().mockResolvedValue(mockChangeValue);

    const result = await CreateInfoDeviceStorage(mockData);
    // Check that login info is updated
    expect(tokenRepository.changeInfoLoginLocal).toHaveBeenCalledWith("nombre", "John");
    expect(tokenRepository.changeInfoLoginLocal).toHaveBeenCalledWith("email", "john@example.com");
    expect(tokenRepository.changeInfoLoginLocal).toHaveBeenCalledWith("apellido", "Doe");
    expect(tokenRepository.changeInfoLoginLocal).toHaveBeenCalledWith("DocumentNumber", "1234567890");
    expect(tokenRepository.changeInfoLoginLocal).toHaveBeenCalledWith("DocumentType", "Passport");

    // Check that headers are updated
    expect(tokenRepository.changeHeaderLocal).toHaveBeenCalledWith("X-SESSION-ID", "token123");
    expect(tokenRepository.changeHeaderLocal).toHaveBeenCalledWith("X-MC-MAIL", "john@example.com");
    expect(result.success).toBe(true);
  });

  test('should fail with parameter in null', async () => {
    const result = await CreateInfoDeviceStorage(null);
    expect(result.success).toBe(false);
  });

  test('should handle error', () => {
    const tokenRepository = new AutoRefreshRepository();

    // Mock an error during data update
    tokenRepository.changeInfoLoginLocal.mockImplementation(() => {
      throw new Error('Error updating info');
    });

    const result = CreateInfoDeviceStorage(mockData);

    // Ensure the result indicates failure
    expect(result.success).toBe(false);
  });
});

describe('GetInfoDeviceStorage', () => {
  test('should retrieve device info from the repository', () => {
    const deviceSpectRepository = new DeviceSpectRepository();
    const storedInfoDevice = { /* Mocked stored device info */ };
    const spyGetDeviceSpectSourceLocal = jest.spyOn(deviceSpectRepository, 'GetDeviceSpectSourceLocal').mockReturnValue(storedInfoDevice);

    const response = GetInfoDeviceStorage();

    expect(spyGetDeviceSpectSourceLocal).toHaveBeenCalled();
    expect(response).toEqual(storedInfoDevice);
  });

  test('should handle error', () => {
    const deviceRepository = new DeviceSpectRepository();
    deviceRepository.GetDeviceSpectSourceLocal.mockImplementation(() => {
      throw new Error('Error updating info');
    });
    const response = GetInfoDeviceStorage();
    expect(response).toBeNull();
  });
});
