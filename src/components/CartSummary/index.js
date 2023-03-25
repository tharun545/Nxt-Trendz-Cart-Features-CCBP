// Write your code here

import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const priceArray = cartList.map(each => each.price * each.quantity)
      const priceSum = priceArray.reduce((a, b) => a + b, 0)

      return (
        <div className="cart-summary-container">
          <h1 className="name-color">
            Order Total: <span className="price"> Rs {priceSum}/-</span>
          </h1>
          <p className="name-color">{cartList.length} Items in cart</p>
          <button type="button" className="checkout-btn">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
