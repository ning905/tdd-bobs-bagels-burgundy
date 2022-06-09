const menu = require('./menu.js')

class Basket {
  constructor () {
    this.basket = []
    this.basketQuantity = 0
    this.basketSize = 5
  }

  getBasket () {
    return this.basket
  }

  addItem (itemName, itemQuantity) {
    if (itemQuantity <= 0) {
      return 'Can\'t add negative bagels!'
    }
    if (this.basketQuantity + itemQuantity > this.basketSize) {
      return 'Basket full, Please choose a bigger basket.'
    }
    for (let index = 0; index < menu.length; index++) {
      if (menu[index].name === itemName) {
        const itemToAdd = menu[index]
        itemToAdd.quantity = itemQuantity
        this.basketQuantity += itemQuantity
        this.basket.push(itemToAdd)
      }
    }
    return this.basket
  }

  removeItem (itemName, itemQuantity) {
    for (let index = 0; index < this.basket.length; index++) {
      if (this.basket[index].name === itemName) {
        if (this.basket[index].quantity === itemQuantity) {
          this.basket.splice(index, 1)
          this.basketQuantity -= itemQuantity
          return this.basket
        } else if (this.basket[index].quantity > itemQuantity) {
          this.basket[index].quantity -= itemQuantity
          this.basketQuantity -= itemQuantity
          return this.basket
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
    const fullmenu = menu.Getmenu()
    for (const items in fullmenu) {if (itemName === items) { return fullmenu[items] }}
  }

  basketTotal () {
    let eachItem = []
    for (let i = 0; i < this.basket.length; i++) {
      eachItem.push(this.basket[i].quantity * this.basket[i].price)
    }
    const totalPrice = eachItem.reduce((total, quantity) => { return total + quantity }, 0)
    return ('£' + totalPrice)
  }
}


module.exports = Basket