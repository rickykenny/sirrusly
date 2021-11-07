import React from "react";

import { AppLayout } from "./components/layout/appLayout";
import { ThemeProvider } from "./components/themeProvider";
import { Flex } from "@chakra-ui/react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { HomeRoute } from "./routes/home";
import { ProductsRoute } from "./routes/products";
import ScrollToTop from "./components/layout/scrollToTop";
import { CurrencyProvider } from "./components/providers/currencyProvider";
import { CartProvider } from "./components/providers/cartProvider";

function App() {
  return (
    <ThemeProvider>
      <CurrencyProvider>
        <CartProvider>
          <Router>
            <ScrollToTop />

            <AppLayout>
              <Flex align="flex-start" justify="center" height="100%">
                <Switch>
                  <Route path="/home" component={HomeRoute} />
                  <Route path="/products" component={ProductsRoute} />
                  <Redirect to="/home" />
                </Switch>
              </Flex>
            </AppLayout>
          </Router>
        </CartProvider>
      </CurrencyProvider>
    </ThemeProvider>
  );
}

export default App;
