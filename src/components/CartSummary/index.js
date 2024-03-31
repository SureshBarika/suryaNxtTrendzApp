// Write your code here
import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let totalAmount = 0

      cartList.forEach(item => {
        totalAmount += item.price * item.quantity
      })

      const cartItems = cartList.length

      return (
        <div className="cart-summary">
          <h2 className="total-hed">
            Order total: <span className="total">{totalAmount}</span>
          </h2>
          <p className="total-items">{cartItems} items in cart</p>
          <button className="checkout-btn" type="button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
