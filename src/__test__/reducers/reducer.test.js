import reducer from '../../reducers/';
import ProductMock from '../../__mocks__/ProductMock';
import ProductMockOther from '../../__mocks__/ProductMockOther';

describe('Reducers', () => {
  test('Return initial state', () => {
    expect(reducer({}, '')).toEqual({});
  });
  test('ADD_TO_CART', () => {
    const initialState = {
      cart: [],
    };
    const payload = ProductMock;
    const action = {
      type: 'ADD_TO_CART',
      payload,
    };
    const expected = {
      cart: [ProductMock],
    };
    expect(reducer(initialState, action)).toEqual(expected);
  });
  test('REMOVE_TO_CART', () => {
    const payload = ProductMock;
    const initialState = {
      cart: [ProductMock, ProductMockOther],
    };
    const action = {
      type: 'REMOVE_FROM_CART',
      payload,
    };
    const expected = {
      cart: [ProductMockOther],
    };
    expect(reducer(initialState, action)).toEqual(expected);
  });
});
