import React, { useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Shop from './Shop';
import Product from './Product';
import '../styles/Body.css';


export default function App() {
  const [numberOfItemsInBasket, setNumberOfItemsInBasket] = useState(0);
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
            addItemToBasket={addItemToBasket}
          />}></Route>
        </Switch>
      <Footer></Footer>
    </div>
  );
};
