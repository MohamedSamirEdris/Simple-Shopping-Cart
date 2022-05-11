import Header from './components/Header'
import Main from './components/Main'
import Cart from './components/Cart';
import data from './data/data';
import {useState} from 'react'

function App() {
  
  const {products} = data;
  const [cartItems , setCartItems] = useState([])

  const addToCard = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, quantity: exist.quantity + 1 } : x
        )

      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  }

  const removeFromCart = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, quantity: exist.quantity - 1 } : x
        )
      );
    }
  }
  return (
    <div className="App">
      <Header countCartItems={cartItems.length }></Header>
      <div className='row'>
        <Main addToCard={addToCard} products={products}></Main>
        <Cart addToCard={addToCard} removeFromCart={removeFromCart} cartItems={cartItems}></Cart>
      </div>
    </div>
  );
}

export default App;
