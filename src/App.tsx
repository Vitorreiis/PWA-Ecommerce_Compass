import Header from "./components/header/header"
import { GlobalStyle } from "./components/GlobalStyle"
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import HomePage from "./pages/homePage/homePage"
import CategoryPage from "./pages/categoryPage/categoryPage"
import ProductPage from "./pages/productPage/productPage";
import CartPage from "./pages/cartPage/cartPage";
import PageCheckout from "./pages/checkoutPage/pageChechout";



function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/categories" element={<CategoryPage />} />
          <Route path="/productPage" element={<ProductPage />} />
          <Route path="/cartPage" element={<CartPage />} />
          <Route path="/pageCheckout" element={<PageCheckout />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
