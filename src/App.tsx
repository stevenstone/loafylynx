import './App.css';
import Liam from "./assets/liam.jpeg";
import Liam2 from "./assets/liam2.jpeg";
import Moose from "./assets/moose.jpeg";
import Storm from "./assets/storm.jpeg";
import Cats from "./assets/cats.jpeg";

function App() {
  const index = Math.floor(Math.random() * 5);
  let img;
  switch (index) {
    case 0:
      img = Liam;
      break;
    case 1:
      img = Liam2;
      break;
    case 2:
      img = Moose;
      break;
    case 3:
      img = Storm;
      break;
    case 4:
      img = Cats;
      break;
  }

  return (
    <>
      {/* <img src={Liam} alt="a side profile of a sitting golden retriever, nose up, smiling" width="604" height="1304" /> */}
      <img src={img} />
    </>
  )
}

export default App
