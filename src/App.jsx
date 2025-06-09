import { Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Nav } from "./components/nav";
import { Home } from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Layout>
        <Nav />
        <Routes>
          <Route path="/kaza" element={<Home />}></Route>
          <Route path="/" element={<Navigate to="/kaza" />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
