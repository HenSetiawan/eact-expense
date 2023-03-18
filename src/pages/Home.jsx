import Balancecard from "../components/balance/index";
import TransactionList from "../components/transaction/TransactionList";
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
          <Col lg={6} xs={12}>
          <TransactionList title="Recent Income"/>
          </Col>
          <Col lg={6} xs={12}>
          <TransactionList title="Recent Expense"/>
          </Col>
        </Row>
    </div>
  );
}

export default App;
