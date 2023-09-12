const AutoRefreshRepository = require("../main/data/attributes/AutoRefreshToken/repository/AutoRefreshRepository");
const {
  refreshToken,
  changeValueHeader,
  changeValueInfo
} = require("../main/domain/RefreshTokenViewModel");

// Mocked response data
const mockAutoRefreshResponse = {
  data: {
    error: 0,
    response: {
      cuenta: {
        token: "new-token"
      }
    }
  }
};
const mockChangeValue = "new-token";

describe('refreshToken', () => {
  test('should successfully refresh the token', async () => {
    // Arrange
    const deviceSpect = {}; // Provide a mock deviceSpect object
    const autoRefreshRepository = new AutoRefreshRepository();

    const spyAutoRefresh = jest.spyOn(autoRefreshRepository, 'autoRefresh').mockResolvedValue(mockAutoRefreshResponse);
    const spyAutoRefreshLocal = jest.spyOn(autoRefreshRepository, 'changeHeaderLocal').mockResolvedValue(mockChangeValue);

    const expectedNewToken = mockAutoRefreshResponse.data.response.cuenta.token;

    // Act
    const result = await refreshToken(deviceSpect);

    // Assert
    expect(spyAutoRefresh).toHaveBeenCalledWith(deviceSpect);
    expect(spyAutoRefreshLocal).toHaveBeenCalledWith("X-SESSION-ID", "new-token");

    expect(result.success).toBe(true);
    expect(result.data).toBe(expectedNewToken);
  });

  test('should failed refresh the token', async () => {
    // Arrange
    const deviceSpect = {}; // Provide a mock deviceSpect object
    const autoRefreshRepository = new AutoRefreshRepository();

    const spyAutoRefresh = jest.spyOn(autoRefreshRepository, 'autoRefresh').mockResolvedValue(null);

    // Act
    const result = await refreshToken(deviceSpect);

    // Assert
    expect(spyAutoRefresh).toHaveBeenCalledWith(deviceSpect);
    expect(result.success).toBe(false);
  });

  test('should handle error when refreshing the token', async () => {
    // Arrange
    const deviceSpect = {}; // Provide a mock deviceSpect object
    const autoRefreshRepository = new AutoRefreshRepository();
    const errorMessage = 'Error refreshing token';
    const spyAutoRefresh = jest.spyOn(autoRefreshRepository, 'autoRefresh').mockRejectedValue(new Error(errorMessage));

    // Act
    const result = await refreshToken(deviceSpect);

    // Assert
    expect(spyAutoRefresh).toHaveBeenCalledWith(deviceSpect);
    expect(result.success).toBe(false);
    expect(result.data).toBe(null);
  });
});

describe('changeValueHeader', () => {
  test('should successfully change the header value', () => {
    // Arrange
    const key = 'X-SESSION-ID';
    const value = 'new-session-id';
    const autoRefreshRepository = new AutoRefreshRepository();
    const spyChangeHeaderLocal = jest.spyOn(autoRefreshRepository, 'changeHeaderLocal').mockReturnValue(value);

    // Act
    const result = changeValueHeader(key, value);

    // Assert
    expect(spyChangeHeaderLocal).toHaveBeenCalledWith(key, value);
    expect(result.success).toBe(true);
    expect(result.data).toBe(value);
  });

  test('should handle error when changing the header value', () => {
    // Arrange
    const key = 'X-SESSION-ID';
    const value = 'new-session-id';
    const autoRefreshRepository = new AutoRefreshRepository();
    const errorMessage = 'Error changing header';
    const spyChangeHeaderLocal = jest.spyOn(autoRefreshRepository, 'changeHeaderLocal').mockImplementation(() => {
      throw new Error(errorMessage);
    });

    // Act
    const result = changeValueHeader(key, value);

    // Assert
    expect(spyChangeHeaderLocal).toHaveBeenCalledWith(key, value);
    expect(result.success).toBe(false);
    expect(result.data).toBe(null);
  });
});

describe('changeValueInfo', () => {
  test('should successfully change the info value', () => {
    // Arrange
    const key = 'some-key';
    const value = 'new-value';
    const autoRefreshRepository = new AutoRefreshRepository();
    const spyChangeInfoLoginLocal = jest.spyOn(autoRefreshRepository, 'changeInfoLoginLocal').mockReturnValue(value);

    // Act
    const result = changeValueInfo(key, value);

    // Assert
    expect(spyChangeInfoLoginLocal).toHaveBeenCalledWith(key, value);
    expect(result.success).toBe(true);
    expect(result.data).toBe(value);
  });

  test('should handle error when changing the info value', () => {
    // Arrange
    const key = 'some-key';
    const value = 'new-value';
    const autoRefreshRepository = new AutoRefreshRepository();
    const errorMessage = 'Error changing info';
    const spyChangeInfoLoginLocal = jest.spyOn(autoRefreshRepository, 'changeInfoLoginLocal').mockImplementation(() => {
      throw new Error(errorMessage);
    });

    // Act
    const result = changeValueInfo(key, value);

    // Assert
    expect(spyChangeInfoLoginLocal).toHaveBeenCalledWith(key, value);
    expect(result.success).toBe(false);
    expect(result.data).toBe(null);
  });
});
