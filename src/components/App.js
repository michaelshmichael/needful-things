import React, { useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Shop from './Shop';
import Product from './Product';
import Cart from './Cart';
import '../styles/Body.css';


export default function App() {
  const [numberOfItemsInBasket, setNumberOfItemsInBasket] = useState(0);
  const [cartContainerClass, setCartContainerClass] = useState('cart-container-hidden');
  const history = useHistory();

  const redirectToProduct = (e) => {
    let productId = e.target.id;
    history.push(`./${productId}`);
  };

  const increaseNumberOfItemsInBasket = () => {
    setNumberOfItemsInBasket(numberOfItemsInBasket+1);
  };

  const addItemToBasket = () => {
    // Will need to put the item information into the basket page
    increaseNumberOfItemsInBasket();
  };

  const toggleCartDisplay = () => {
    if(cartContainerClass === 'cart-container-hidden'){
        setCartContainerClass('cart-container')
    } else {
        setCartContainerClass('cart-container-hidden')
    }
  };

  return (
    <div className="App">
      <Header 
      numberOfItemsInBasket={numberOfItemsInBasket}
      ></Header>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/shop' render={props => <Shop {...props}
            redirectToProduct={redirectToProduct}
          />}></Route>
          <Route exact path='/:productId' render={props => <Product {...props}
            toggleCartDisplay={toggleCartDisplay}
          />}></Route>
        </Switch>
      <Cart 
      toggleCartDisplay={toggleCartDisplay}
      cartContainerClass={cartContainerClass}></Cart>
      <Footer></Footer>
    </div>
  );
};
