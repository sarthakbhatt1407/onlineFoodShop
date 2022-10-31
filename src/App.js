import { Fragment, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

const App = () => {
  // Cart UseState
  const [cartState, setCartState] = useState(false);

  // Cart Visibility Handler
  const cartVisibilityShowHandler = () => {
    setCartState(true);
  };
  const cartVisibilityHideHandler = () => {
    setCartState(false);
  };

  // Page Visibility Handler

  return (
    <Fragment>
      <Header onClickCart={cartVisibilityShowHandler} />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/contact-us" exact>
          <Contact />
        </Route>
      </Switch>
      {cartState && <Cart onClick={cartVisibilityHideHandler} />}
    </Fragment>
  );
};
export default App;
