import React from 'react';

const Header = (props) => {
  const { countCartItems } = props;
  return (
    <header className="row block center">
      <div>
        <a href="#/">Plates Shopping Cart</a>
      </div>
      <div>
        <a href="#/cart">Cart</a>
        Cart{' '}
        {countCartItems ? (
          <button className="badge">{countCartItems}</button>
        ) : (
          ''
        )}
      </div>
    </header>
  );
};

export default Header;
