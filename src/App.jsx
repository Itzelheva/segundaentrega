import { BrowserRouter, Routes, Route} from "react-router-dom";

//COMPONENTS
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"

//PAGES
import HomePage from "./pages/HomePage";          //Navega a ItemListContainer
import CategoryPage from "./pages/CategoryPage";  //Navega a ItemListContainer
import ItemPage from "./pages/ItemPage";          //Navega a ItemDetailContainer
import ErrorPage from "./pages/ErrorPage";        //Página no encontrada (ERROR)


function App() {
  return (

    <BrowserRouter>
      <NavBar />
    
    <Routes>
      <Route path="/" element={<HomePage />} /> 
      <Route path="/category/:categoryId" element={<CategoryPage />} />
      <Route path="/item/:itemId" element={<ItemPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>

    </BrowserRouter>
  )
}

export default App
