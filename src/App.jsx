import { BrowserRouter, Routes, Route} from "react-router-dom";
import { CartProvider } from "./context/CartContext";

//COMPONENTS
import NavBar from "./components/NavBar/NavBar";

//PAGES
import HomePage from "./pages/HomePage";          //Navega a ItemListContainer
import CategoryPage from "./pages/CategoryPage";  //Navega a ItemListContainer
import ItemPage from "./pages/ItemPage";          //Navega a ItemDetailContainer
import CartViewPage from "./pages/CartViewPage";  //Navega a Cart
import CheckoutPage from "./pages/CheckoutPage";  //Navega a CheckoutForm
import ErrorPage from "./pages/ErrorPage";        //Página no encontrada (ERROR)



function App() {

  console.log(import.meta.env.VITE_APY_KEY)    //variables de entorno

  return (

    <BrowserRouter>
    <CartProvider>
      <NavBar />
    
    <Routes>
      <Route path="/" element={<HomePage />} /> 
      <Route path="/category/:categoryId" element={<CategoryPage />} />
      <Route path="/item/:itemId" element={<ItemPage />} />
      <Route path="/cart" element={<CartViewPage />} />
      <Route path="checkoutform" element={<CheckoutPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>

    </CartProvider>
    </BrowserRouter>
  )
}

export default App
