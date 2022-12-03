import Balancecard from "../components/balance/index";
import CashflowCard from "../components/balance/CashflowCard";
import Transaction from "../components/transaction/index";
import { Row, Col } from "react-bootstrap";
function App() {
  return (
    <div>
        <Row>
          <Col lg={12} xs={12}>
            <div className="welcome-card">
              <h2 className="font-jakarta-sans">Welcome Dikamsi 👌🏼</h2>
              <p className="font-jakarta-sans font-secondary">
                15th Jan 2021 • 09:47
              </p>
            </div>
            <Balancecard />
          </Col>
        </Row>
        <Row className="mt-5">
          <CashflowCard/>
          <Transaction/>
        </Row>
    </div>
  );
}

export default App;
