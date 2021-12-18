import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Cart } from "./component/Cart";
import { Header } from "./component/Header";
import { Home } from "./component/Home";
import "./styles.css";

export default function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Cart" element={<Cart />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}
