import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Bins from "./components/Bins";
import Login from "./components/Login";
import Footer from "./components/Footer";

function App() {
  return (
    <Container>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<Bins />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Container>
  );
}

const Container = styled.div``;

export default App;
