import "./App.css";

// 1 - config react router, sem links
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// pages
import Home from "./pages/Home";
import About from "./Pages/About";

// 2 - adicionando links
// components
import Navbar from "./components/Navbar";
import Product from "./Pages/Product";
import Info from "./Pages/info";
import NotFound from "./Pages/NotFound";
import Search from "./Pages/Search";
import { SearchForm } from "./Components/SearchForm";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
        <Navbar />
        {/* 9 - search */}
        <SearchForm />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          {/* 6 - nested route */}
          <Route path="/products/:id/info" element={<info />} />
          {/* 4 - rota dinamica */}
          <Route path="/products/:id" element={<Product />} />

          {/* 9 search params */}
          <Route path="/search" element={<Search />} />
          {/* 10 - redirect */}
          <Route path="/company" element={<Navigate to="/about" />} />
          {/* 7  - no match route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;