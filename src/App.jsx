
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import SingerPage from "./pages/SingerPage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import SingerNav from "./components/SingerNav.jsx";

function App() {
  return (
    <div className="app">
      <h1>Complete the Lyrics</h1>

      <SingerNav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/singer/:singerId"
          element={<SingerPage />}
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
