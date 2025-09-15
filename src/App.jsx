import { useState, useEffect } from 'react';
import { CartProvider } from './context/CartContext';
import { SearchProvider } from './context/SearchContext';
import { AuthProvider } from './context/AuthContext';
import { OrderProvider } from './context/OrderContext';
import { AllOrdersProvider } from './context/AllOrdersContext';
import Header from './components/Header';
import FeaturedProducts from './components/FeaturedProducts';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import ProductDetail from './components/ProductDetail';
import BundleDetail from './components/BundleDetail';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import CookiePolicy from './components/CookiePolicy';
import FAQ from './components/FAQ';
import ReturnsAndExchanges from './components/ReturnsAndExchanges';
import ShippingInfo from './components/ShippingInfo';
import SecretOrders from './components/SecretOrders';
import { Routes, Route } from 'react-router-dom'
import './App-new.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Preload the loader.gif
    const loaderImg = new Image();
    loaderImg.src = '/src/assets/loader.gif';
  }, []);

  const handleLoadComplete = () => {
    setIsLoading(false);
  };

  return (
    <AuthProvider>
      <OrderProvider>
        <AllOrdersProvider>
          <CartProvider>
            <SearchProvider>
              {isLoading && <LoadingScreen onLoadComplete={handleLoadComplete} />}
              <div className="App">
                <Header />
                <main>
                  <Routes>
                    <Route path="/" element={
                      <>
                        <FeaturedProducts />
                        <Products />
                        <Contact />
                      </>
                    } />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/terms-of-service" element={<TermsOfService />} />
                    <Route path="/cookie-policy" element={<CookiePolicy />} />
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/returns-and-exchanges" element={<ReturnsAndExchanges />} />
                    <Route path="/shipping-info" element={<ShippingInfo />} />
                    <Route path="/product/:id" element={<ProductDetail />} />
                    <Route path="/bundle/:id" element={<BundleDetail />} />
                    <Route path="/secretorders9274" element={<SecretOrders />} />
                  </Routes>
                </main>
                <Footer />
              </div>
            </SearchProvider>
          </CartProvider>
        </AllOrdersProvider>
      </OrderProvider>
    </AuthProvider>
  );
}

export default App;
