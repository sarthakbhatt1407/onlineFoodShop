import { Fragment, useState } from "react";
import Header from "./components/Header";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

const App = () => {
  // Page UseState
  const [homeVisibility, setHomeVisibility] = useState(true);
  const [aboutVisibility, setAboutVisibility] = useState(false);
  const [contactVisibility, setContactVisibility] = useState(false);

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
  const pageVisibilityHandler = (page) => {
    if (page == "home") {
      setHomeVisibility(true);
      setAboutVisibility(false);
      setContactVisibility(false);
    } else if (page == "about") {
      setHomeVisibility(false);
      setAboutVisibility(true);
      setContactVisibility(false);
    } else if (page == "contact us") {
      setHomeVisibility(false);
      setAboutVisibility(false);
      setContactVisibility(true);
    }
  };

  return (
    <Fragment>
      <Header
        onClick={pageVisibilityHandler}
        onClickCart={cartVisibilityShowHandler}
      />

      {homeVisibility && <Home />}
      {aboutVisibility && <About />}
      {contactVisibility && <Contact />}
      {cartState && <Cart onClick={cartVisibilityHideHandler} />}
    </Fragment>
  );
};
export default App;
