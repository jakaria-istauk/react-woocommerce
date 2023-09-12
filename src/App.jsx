import Header from "./components/common/Header";
import Products from "./components/layouts/product/Products";
import Footer from "./components/common/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <div className="mt-7 pt-10">
        <Products />
      </div>
      <Footer />
    </>
  );
}

export default App;
