import { Route, Routes } from "react-router-dom";
import "./App.css";
import TopBar from "./components/TopBar";
import useNavigation from "./hooks/useNavigation";
import Home from "./pages/Home";
import Settings from "./pages/Settings";

function App() {
  // * Hooks
  useNavigation();

  return (
    <div className="flex h-screen w-screen flex-col bg-primary-dark">
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
}

export default App;
