import React from 'react';

const Cart = (props) => {
  const { cartItems, addToCard, removeFromCart } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.quantity, 0);
  const shippingPrice =
    itemsPrice < 50
      ? 4.95
      : 20 && itemsPrice < 90
      ? 2.95
      : 20 && itemsPrice >= 90
      ? 0
      : 0;
  const totalPrice = itemsPrice + shippingPrice;
  return (
    <aside className="block col-1">
      <h2>Cart Items</h2>
      <div>
        {cartItems.length === 0 && <div>Cart Is Emty</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-2">{item.name}</div>
            <div className="col-2">
              <button onClick={() => addToCard(item)} className="add">
                +
              </button>
              <button onClick={() => removeFromCart(item)} className="remove">
                -
              </button>
            </div>

            <div>
              {item.quantity} x ${item.price}
            </div>
          </div>
        ))}
        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-2">Items Price</div>
              <div className="col-1 text-right">${itemsPrice}</div>
            </div>
            <div className="row">
              <div className="col-2">shipping Price</div>
              <div className="col-1 text-right">${shippingPrice}</div>
            </div>
            <div className="row">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                <strong>${totalPrice}</strong>
              </div>
            </div>
            <hr/>
            <div className='row'>
              <button >Checkout</button>
            </div>
          </>
        )}
      </div>
    </aside>
  );
};

export default Cart;
