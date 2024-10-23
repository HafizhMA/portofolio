import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/pages/Home";
import './index.css';
import SkillsPage from "./components/pages/SkillsPage";
import ProjectsPage from "./components/pages/ProjectsPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/skills' element={<SkillsPage />} />
        <Route path='/projects' element={<ProjectsPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
