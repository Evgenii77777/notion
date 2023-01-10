import { Route, Routes } from "react-router-dom";
import { Header } from "./components/header";
import { HomePage } from "./pages/home-page";
import { MatchPage } from "./pages/match-page";

import "./App.css";
import { Container } from "./components/container";

function App() {
  return (
    <>
      <Header />
      <Container>
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/match/:id" element={<MatchPage />} />
          </Routes>
        </div>
      </Container>
    </>
  );
}

export default App;
