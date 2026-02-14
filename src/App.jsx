import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import ProfilePage from "./pages/ProfilePage";
import NotFound from "./pages/NotFound";



const App = () => { 

  return (  
    <div >
      <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage/>}></Route>
              <Route path="/product/:id/:name" element={<ProductPage/>}></Route>
              <Route path="/profile/:facebookID" element={<ProfilePage/>}></Route>
              <Route path="*" element={<NotFound/>}></Route>

            </Routes>
      </BrowserRouter>
      
    </div>  
    

    

  );
};

export default App;