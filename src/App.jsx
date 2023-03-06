import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import store from './app/store';
import Navbar from './components/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Products from './pages/Products';
import SignIn from './pages/SignIn';
import RequireAuth from './components/RequireAuth';

const App = () => {
  const queryClient = new QueryClient();

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <RequireAuth>
                  <Home />
                </RequireAuth>
              }
            />
            <Route path="/sign-in" element={<SignIn />} />
            <Route
              path="/products"
              element={
                <RequireAuth>
                  <Products />
                </RequireAuth>
              }
            />
            <Route
              path="/products/:id"
              element={
                <RequireAuth>
                  <ProductDetail />
                </RequireAuth>
              }
            />
            <Route path="/about" element={<About />} />
          </Routes>
        </Provider>
      </QueryClientProvider>
    </div>
  );
};

export default App;
