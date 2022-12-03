import Navigationbar from "./components/navbar/Navigationbar";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <div className="App mx-auto">
      <Navigationbar />
      <Container className="mt-5">
        <Outlet/>
      </Container>
    </div>
  );
}

export default App;
