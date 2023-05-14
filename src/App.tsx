import "./App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Sidebar from "./components/sidebar/Sidebar";
import Locations from "./pages/Locations";
import { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext";
import Components from "./pages/Components";
import Learning from "./pages/Learning";
import Roadmap from "./pages/Roadmap";

function App() {
  const theme: any = useContext(ThemeContext);
  const { darkMode } = theme.state;

  return (
    <Router>
      <Sidebar />
      <div className={`${darkMode ? "main-dark" : "main"}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/components" element={<Components />} />
          <Route path="/learning" element={<Learning />} />
          <Route path="/roadmap" element={<Roadmap />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
