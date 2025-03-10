import { CitiesProvider } from "./Contexts/CitiesContext";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import Product from "./Pages/Product";
import Pricing from "./Pages/Pricing";
import Login from "./Pages/Login";
import AppLayout from "./Pages/AppLayout";
import PageNotFound from "./Pages/PageNotFound";
import CityList from "./Components/CityList";
import CountryList from "./Components/CountryList";
import City from "./Components/City";
import Form from "./Components/Form";
import { AuthProvider } from "./Contexts/FakeAuthContext";
import ProtectedRoute from "./Pages/ProtectedRoute";

function App() {
  return (
    <div>
      <AuthProvider>
        <CitiesProvider>
          <BrowserRouter>
            <Routes>
              <Route index element={<HomePage />} />
              <Route path="product" element={<Product />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="login" element={<Login />} />
              <Route
                path="app"
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<Navigate replace to="cities" />} />
                <Route path="cities" element={<CityList />} />
                <Route path="cities/:id" element={<City />} />
                <Route path="countries" element={<CountryList />} />
                <Route path="form" element={<Form />} />
              </Route>
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </BrowserRouter>
        </CitiesProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
