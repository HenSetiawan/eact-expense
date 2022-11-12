import Navigationbar from "./components/navbar/Navigationbar";
import Balancecard from "./components/balance/index";
import CashflowCard from "./components/balance/CashflowCard";
import { Container, Row, Col } from "react-bootstrap";
function App() {
  return (
    <div className="App">
      <Navigationbar />
      <Container className="mt-5">
        <Row>
          <Col lg={8} xs={12}>
            <div className="welcome-card">
              <h2 className="font-jakarta-sans">Welcome Dikamsi 👌🏼</h2>
              <p className="font-jakarta-sans font-secondary">
                15th Jan 2021 • 09:47
              </p>
            </div>
            <Balancecard />
          </Col>
        </Row>
        <Row>
          <CashflowCard/>
        </Row>
      </Container>
    </div>
  );
}

export default App;
