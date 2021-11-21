import styled from "styled-components";
import {Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Map from "./components/Map";

function App() {
  return (
    <Container>
      <Navbar />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/map" element={<Map/>}/>
    </Routes>
    </Container>
  );
}

const Container = styled.div``;

export default App;
