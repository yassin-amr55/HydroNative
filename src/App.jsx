import { useState, useEffect } from 'react';
import { CartProvider } from './context/CartContext';
import { SearchProvider } from './context/SearchContext';
import { AuthProvider } from './context/AuthContext';
import { OrderProvider } from './context/OrderContext';
import Header from './components/Header';
import FeaturedProducts from './components/FeaturedProducts';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import ProductDetail from './components/ProductDetail';
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
                  <Route path="/product/:id" element={<ProductDetail />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </SearchProvider>
        </CartProvider>
      </OrderProvider>
    </AuthProvider>
  );
}

export default App;
