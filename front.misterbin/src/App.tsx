import styled from "styled-components";
import {Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Map from "./components/Map";
import Login from "./components/Login"

function App() {
  return (
    <Container>
      <Navbar />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/map" element={<Map/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
    </Container>
  );
}

const Container = styled.div``;

export default App;
