import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from "./component/Header.jsx";
import Home from "./component/Home";
import Coins from "./component/Coins";
import Exchanges from "./component/Exchanges";
import CoinDetails from "./component/CoinDetails";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Coins" element={<Coins />} />
      <Route path="/Coin/:id" element={<CoinDetails />} />
      <Route path="/Exchanges" element={<Exchanges />} />

      </Routes>
    </Router>
  );
}

export default App;
