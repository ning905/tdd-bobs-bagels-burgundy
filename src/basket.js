const menu = require('./menu.js')

class Basket {
  constructor () {
    this.basket = []
    this.basketSize = 5
  }

  getBasket () {
    return this.basket
  }

  addItem (itemName, itemQuantity) {
    for (const items in menu) {
      if (items === itemName) {
        const insideBasket = {
          item: itemName,
          quantity: itemQuantity,
          price: fullmenu[items]
        }
        this.basket.push(insideBasket)
      }
    }
  }

  removeItem (itemName) {
    for (let i = 0; i < this.basket.length; i++) {
      if (this.basket[i].item === itemName) {
        this.basket.splice(i, 1)
        return this.basket
      } else if (this.basket[i].item !== itemName)
        return 'This item is not in the basket.'
    }
  }

  basketCapacity () {
    const totalCapacity = this.basket.reduce((total, quantity) => { return total + quantity.quantity }, 0)
    if (totalCapacity > this.basketSize) {
      return 'Basket full, Please choose a bigger basket.'
    }
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