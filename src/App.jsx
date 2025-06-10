import { Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Nav } from "./components/nav";
import { Home } from "./pages/Home";
import { Association } from "./pages/Onglet_asso/Association";
import { Contact } from "./pages/Onglet_asso/Contact";
import { Equipe } from "./pages/Onglet_asso/Equipe";
import { Locaux } from "./pages/Onglet_asso/Locaux";
import { Sponsors } from "./pages/Onglet_asso/Sponsors";
import { Statuts } from "./pages/Onglet_asso/Statuts";

function App() {
  return (
    <div className="App">
      <Layout>
        <Nav />
        <Routes>
          <Route path="/accueil" element={<Home />}></Route>
          <Route path="/association" element={<Association />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/equipe" element={<Equipe />}></Route>
          <Route path="/locaux" element={<Locaux />}></Route>
          <Route path="/sponsors" element={<Sponsors />}></Route>
          <Route path="/statuts" element={<Statuts />}></Route>
          <Route path="/" element={<Navigate to="/accueil" />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
