import "./App.css";
import LandingPage from "./components/screens/LandingPage";
import PelangganKirimScanInput from "./components/screens/PelangganKirimScanInput";
import MasukanDetailPengiriman from "./components/screens/MasukanDetailPengiriman";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MasukanDetailPenerima from "./components/screens/MasukanDetailPenerima";
import MasukanDimensi from "./components/screens/MasukanDimensi";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/PelangganKirimScanInput"
          element={<PelangganKirimScanInput />}
        />
        <Route
          path="/MasukanDetailPengiriman"
          element={<MasukanDetailPengiriman />}
        />
        <Route
          path="/MasukanDetailPenerima"
          element={<MasukanDetailPenerima />}
        />
        <Route path="/MasukanDimensi" element={<MasukanDimensi />} />
      </Routes>
    </Router>
  );
}

export default App;
