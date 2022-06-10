const menu = require('./menu.js')

class Basket {
  constructor () {
    this.basket = []
    this.basketQuantity = 0 // the quantity of items in the basket, not of each product line
    this.basketSize = 5
  }

  getBasket () {
    return this.basket
  }

  addItem (itemName, itemQuantity) {
    // If the passed item quantity is equal to or less than 0 return error
    if (itemQuantity <= 0) {
      return 'Can\'t add negative bagels!'
    }
    // If the passed item quantity plus the current basket quantity would exceed the max basket quantity, return an error
    if (this.basketQuantity + itemQuantity > this.basketSize) {
      return 'Basket full, Please choose a bigger basket.'
    }
    // If neither of the above are true, loop through the menu, checking the name key in each object
    // - If there is a match between the name inside MENU and the name passed above,
    // - If there is no match, just continue loop until it finishes looping the MENU array
    for (let index = 0; index < menu.length; index++) {
      if (menu[index].name === itemName) {
        const findInBasket = this.basket.find(object => object.name === itemName)
        if (findInBasket) {
          this.basketQuantity += itemQuantity
          findInBasket.quantity += itemQuantity
          return this.basket
        }
        const itemToAdd = menu[index]
        itemToAdd.quantity = itemQuantity
        this.basketQuantity += itemQuantity
        this.basket.push(itemToAdd)
      }
    }
    return this.basket
  }

  removeItem (itemName, itemQuantity) {
    // searches through the basket array looking for an item by name
    // - if found, enters the if statement on 36
    // - if not found, moves to return on 50
    for (let index = 0; index < this.basket.length; index++) {
      if (this.basket[index].name === itemName) {
        // Test - Remove all bagels from basket
        if (this.basket[index].quantity === itemQuantity) {
          this.basket.splice(index, 1) // splice completely removes the object
          this.basketQuantity -= itemQuantity
          return this.basket
        // Test - Remove a bagel from basket, leave remaining bagel
        } else if (this.basket[index].quantity > itemQuantity) {
          this.basket[index].quantity -= itemQuantity // updates the number of items of this specific name
          this.basketQuantity -= itemQuantity // updates the the number of items in the basket
          return this.basket
        // Test - Remove more bagels than are in the basket
        } else if (this.basket[index].quantity < itemQuantity) {
          return 'Can\'t remove items than are in your basket!'
        }
      }
    }
    return 'This item is not in the basket.'
  }

  increaseCapacity (num) {
    this.basketSize += num
  }

  priceChecker (itemName) {
    return menu.find(product => product.name === itemName).price
  }

  getBasketTotal () {
    let totalPrice = 0
    for (let index = 0; index < this.basket.length; index++) {
      totalPrice += this.basket[index].price * this.basket[index].quantity;
    }
    return ('£' + totalPrice)
  }
}

module.exports = Basket