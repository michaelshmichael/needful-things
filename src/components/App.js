import React, { useEffect, useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Shop from './Shop';
import Product from './Product';
import Cart from './Cart';
import wholeInventory from '../data';
import '../styles/Body.css';


export default function App() {
  const [numberOfItemsInCart, setNumberOfItemsInCart] = useState(0);
  const [cartContainerClass, setCartContainerClass] = useState('cart-container-hidden');
  const [cartContents, setCartContents] = useState([]);
  const [cartPrice, setCartPrice] = useState(0);
  const history = useHistory();

  const setInitialTotalPrice = () => {
    let cartPrice = 0;
    cartContents.forEach(item => {
      let itemPrice = item.price*item.itemTotal;
      cartPrice += itemPrice;
    })
    setCartPrice(cartPrice)
  };

  useEffect(() => {
    setInitialTotalPrice();
  }, [cartContents]);

  const updateCartPrice = (itemTotal, operator) => {
    console.log(itemTotal, operator)
    if(operator === 'plus'){ 
        setCartPrice(cartPrice+itemTotal);
    } else {
        setCartPrice(cartPrice-itemTotal);
    }
  };

  const redirectToProduct = (e) => {
    let productId = e.target.id;
    history.push(`./${productId}`);
  };

  // Make these 'change no. of items
  const increaseNumberOfItemsInCart = () => {
    setNumberOfItemsInCart(numberOfItemsInCart+1);
  };

  const decreaseNumberOfItemsInCart = () => {
    setNumberOfItemsInCart(numberOfItemsInCart-1);
  }

  const addItemToCart = (product) => {
    let productToAdd = wholeInventory.find(item => item.id === product.target.id);
    if(cartContents.indexOf(productToAdd) !== -1 ){
      alert('cart already contains this item')
    } else {
      setCartContents(cartContents.concat(productToAdd))
      increaseNumberOfItemsInCart();
      setInitialTotalPrice(productToAdd);
    }
  };

  const deleteItemFromCart = (product) => {
    const updatedCartContents = cartContents.filter(item => item.id !== product.target.id)
    setCartContents(updatedCartContents)
    decreaseNumberOfItemsInCart();
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
      numberOfItemsInCart={numberOfItemsInCart}
      toggleCartDisplay={toggleCartDisplay}
      ></Header>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/shop' render={props => <Shop {...props}
            redirectToProduct={redirectToProduct}
          />}></Route>
          <Route exact path='/:productId' render={props => <Product {...props}
            addItemToCart={addItemToCart}
          />}></Route>
        </Switch>
      <Cart
      updateCartPrice={updateCartPrice}
      cartContents={cartContents}
      cartPrice={cartPrice}
      toggleCartDisplay={toggleCartDisplay}
      cartContainerClass={cartContainerClass}
      deleteItemFromCart={deleteItemFromCart}>
      </Cart>
      <Footer></Footer>
    </div>
  );
};
