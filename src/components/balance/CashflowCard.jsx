import React from "react";
import { Col, Card, ProgressBar } from "react-bootstrap";
import CashflowCart from "./CashflowCart";
import wallet from "../../assets/images/wallet.svg";

function CashflowCard() {
  return (
    <Col lg={6}>
      <Card className="p-4 font-jakarta-sans">
        <div className="head-cashflow d-flex align-items-center justify-content-between">
          <h2>This Month</h2>
          <a href="" className="text-decoration-none">
            VIEW MORE
          </a>
        </div>
        <div className="body-cashlow d-flex">
          <img src={wallet} alt="wallet icons" className="wallet-icon mt-2" />
          <div className="ms-2 mt-3">
            <div className="d-flex">
              <p>Cashflow</p>
              <p className="ms-4">₦30,000,000.00</p>
            </div>
            <div>
              <ProgressBar>
                <ProgressBar
                  variant="primary"
                  now={50}
                  key={1}
                  label={"Income"}
                />
                <ProgressBar
                  variant="warning"
                  now={50}
                  key={2}
                  label={"Expense"}
                />
              </ProgressBar>
            </div>
          </div>
        </div>
        <CashflowCart/>
      </Card>
    </Col>
  );
}

export default CashflowCard;
