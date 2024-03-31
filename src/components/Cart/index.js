import Header from '../Header'
import CartListView from '../CartListView'

import CartContext from '../../context/CartContext'
import EmptyCartView from '../EmptyCartView'
import CartSummary from '../CartSummary'

import './index.css'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, removeAllCartItems} = value
      const showEmptyView = cartList.length === 0
      // TODO: Update the functionality to remove all the items in the cart

      const removeAll = () => {
        removeAllCartItems()
      }

      return (
        <>
          <Header />
          <div className="cart-container">
            {showEmptyView ? (
              <EmptyCartView />
            ) : (
              <div className="cart-content-container">
                <div className="cart-header">
                  <h1 className="cart-heading">My Cart</h1>
                  <button
                    data-testid="remove"
                    onClick={removeAll}
                    className="remove-all-btn"
                    type="button"
                  >
                    Remove All
                  </button>
                </div>
                <CartListView />
                {/* TODO: Add your code for Cart Summary here */}
                <div className="cart-summary-cont">
                  <CartSummary />
                </div>
              </div>
            )}
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)
export default Cart
