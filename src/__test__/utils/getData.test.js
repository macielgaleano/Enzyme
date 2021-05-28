import getData from '../../utils/getData';

beforeEach(() => {
  fetch.resetMocks();
});

describe('Fetch API', () => {
  test('Llamar a una api y retornar datos', () => {
    fetch.mockResponseOnce(JSON.stringify({ data: '12345' }));

    getData('https://google.com').then(response => {
      expect(response.data).toEqual('12345');
    });

    expect(fetch.mock.calls[0][0]).toEqual('https://google.com');
  });
});
