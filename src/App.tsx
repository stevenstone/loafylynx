import './App.css';
import Liam from "./assets/liam.jpeg";
import Liam2 from "./assets/liam2.jpeg";
import Moose from "./assets/moose.jpeg";
import Storm from "./assets/storm.jpeg";
import Cats from "./assets/cats.jpeg";
import { Idyllic } from "./pages/idyllic-helper/Idyllic";
import { Route, Routes } from 'react-router';

const images = [Liam, Liam2, Moose, Storm, Cats];

function App() {
  const index = Math.floor(Math.random() * 5);

  return (
    <Routes>
      <Route index element={<img src={images[index]} />} />
      <Route path="/idyllic" element={<Idyllic />} />
    </Routes>
  )
}

export default App
