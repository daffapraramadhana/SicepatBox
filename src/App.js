import "./App.css";
import LandingPage from "./components/screens/LandingPage";
import PelangganKirimScanInput from "./components/screens/PelangganKirimScanInput";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/PelangganKirimScanInput"
          element={<PelangganKirimScanInput />}
        />
      </Routes>
    </Router>
  );
}

export default App;
