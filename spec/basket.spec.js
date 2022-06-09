const Basket = require('../src/basket.js')
describe('Basket', () => {
  let basket

  beforeEach(() => {
    basket = new Basket();
  });

//   it('Get all basket', () => {
//     const expected = []
//     let getBasket = basket.getBasket()
//     expect(getBasket).toEqual(expected)
//   })

/* Part 1-1 */
  it('Add items to basket', () => {
    const expected = [
      { name: 'bagel', quantity: 1, price: 2.99 },
      { name: 'brownie', quantity: 3, price: 3.99 }]

    basket.addItem('bagel', 1)
    basket.addItem('brownie', 3)
    const bagelInBasket = basket.getBasket()
    expect(bagelInBasket).toEqual(expected)
  })

  it('Error message for negative basket quantities', () => {
    const expected = 'Can\'t add negative bagels!'

    const result = basket.addItem('bagel', -2)
    expect(result).toEqual(expected)
  })

/* Part 2-1 */
it('Alert when basket is full', () => {
    const expected = 'Basket full, Please choose a bigger basket.'

    basket.addItem('bagel', 3)
    const result = basket.addItem('brownie', 5)
    expect(result).toEqual(expected)
  })

/* Part 1-2 */
  it('Remove all bagels from basket', () => {
    const expected = [
      { name: 'brownie', quantity: 3, price: 3.99 }]

    basket.addItem('bagel', 1)
    basket.addItem('brownie', 3)
    const remainingItems = basket.removeItem('bagel', 1)
    expect(remainingItems).toEqual(expected)
  })

  it('Remove a bagel from basket, leave remaining bagel', () => {
    const expected = [
      { name: 'bagel', quantity: 1, price: 2.99 },
      { name: 'brownie', quantity: 3, price: 3.99 }]

    basket.addItem('bagel', 2)
    basket.addItem('brownie', 3)
    const remainingItems = basket.removeItem('bagel', 1)
    expect(remainingItems).toEqual(expected)
  })

  it('Remove more bagels than are in the basket', () => {
    const expected = 'Can\'t remove items than are in your basket!'

    basket.addItem('bagel', 2)
    basket.addItem('brownie', 3)
    const remainingItems = basket.removeItem('bagel', 3)
    expect(remainingItems).toEqual(expected)
  })

/* Part 2-3 */
it('Alert when trying to remove item that doesn\'t exist inside basket', () => {
    const expected = 'This item is not in the basket.'

    basket.addItem('bagel', 3)
    basket.addItem('brownie', 5)
    let alert = basket.removeItem('Kebab', 10)
    expect(alert).toEqual(expected)
  })

/* Part 2-2 */
  it('Create basket with larger size', () => {
    basket.increaseCapacity(2)
    const result = basket.basketSize
    expect(result).toEqual(7)
  })

/* Part 3-1
  it('price checker for items', () => {
    const expected = 3.99

    const result = basket.priceChecker('brownie')
    expect(result).toEqual(expected)
  })

  it('favourite bagel quantity', () => {
    const expected = [
      { item: 'chocolateBagel', quantity: 3, price: 4.99 }
    ]

    basket.addItem('chocolateBagel', 1)
    basket.addItem('chocolateBagel', 1)
    basket.addItem('chocolateBagel', 1)
    let result = basket.getBasket()
    expect(result).toEqual(expected)
  })

/* Part 3-2
  it('basket total', () => {
    const expected = '£29.93'

    basket.addItem('chocolateBagel', 3)
    basket.addItem('bagel', 1)
    basket.addItem('brownie', 3)
    const result = basket.getBasketTotal()
    expect(result).toEqual(expected)
  }) */
})