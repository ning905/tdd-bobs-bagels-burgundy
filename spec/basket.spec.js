const Basket = require('../src/basket.js')
describe('Basket', () => {
//   let basket
//   const smallBasket = 5;
//   const mediumBasket = 10;
//   const largeBasket = 15;

  beforeEach(() => {
    basket = new Basket();
  });

//   it('Get all basket', () => {
//     const expected = []
//     let getBasket = basket.getBasket()
//     expect(getBasket).toEqual(expected)
//   })

/* Part 1-1
As a member of the public
So I can order a bagel when I want to
I'd like to add an item to my basket */
  it('Add items to basket', () => {
    const expected = [
      { item: 'bagel', quantity: 1, price: 2.99 },
      { item: 'brownie', quantity: 3, price: 3.99 }]

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

/* Part 2-1
As a member of the public,
So that I can not overfill my small bagel basket
I'd like to know when my basket is full when I try adding an item beyond my basket capacity. */
it('Alert when basket is full', () => {
    const expected = 'Basket full, Please choose a bigger basket.'

    basket.addItem('bagel', 3)
    const result = basket.addItem('brownie', 5)
    expect(result).toEqual(expected)
  })

/* Part 1-2
As a member of the public,
So that I can change my order
I'd like to remove an item from my basket */
  it('Remove bagel from basket', () => {
    const expected = [
      { item: 'brownie', quantity: 3, price: 3.99 }]

    basket.addItem('bagel', 1)
    basket.addItem('brownie', 3)
    const remainingItems = basket.removeItem('bagel')
    expect(remainingItems).totoEqual(expected)
  })

/* Part 2-3
As a member of the public
So that I can maintain my sanity
I'd like to know if I try to remove an item that doesn't exist in my basket. */
it('Alert when trying to remove item that doesn\'t exist inside basket', () => {
    const expected = 'This item is not in the basket.'

    basket.addItem('bagel', 3)
    basket.addItem('brownie', 5)
    let alert = basket.removeItem('Kebab', 10)
    expect(alert).toEqual(expected)
  })

/* Part 2-2
As a Bob's Bagels manager,
So that I can record more sales
I’d like to create baskets with larger capacity when I need to. */
  it('Create basket with larger size', () => {
    basket.increaseCapacity(2)
    const result = this.basketSize
    expect(result).toEqual(7)
  })

/* Part 3-1
As a member of the public,
So that I can know how much my bagels are,
I’d like to see the price of each item before I add it to my basket. */
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
As a member of the public,
So that I can prepare to pay
When I go to checkout I'd like to know the total sum of the bagels in my basket */
  it('basket total', () => {
    const expected = '£29.93'

    basket.addItem('chocolateBagel', 3)
    basket.addItem('bagel', 1)
    basket.addItem('brownie', 3)
    const result = basket.getBasketTotal()
    expect(result).toEqual(expected)
  })
})