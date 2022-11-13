import React from "react";
import { Col, Card } from "react-bootstrap";
import TransactionItem from "./TransactionItem";

function index() {
  return (
    <Col lg={6}>
      <Card className="p-4 font-jakarta-sans">
        <div className="d-flex align-items-center justify-content-between transaction">
          <h2>Recents Transactions</h2>
          <a href="" className="text-decoration-none">
            VIEW MORE
          </a>
        </div>
        <div className="transaction-list mt-5">
          <TransactionItem />
        </div>
      </Card>
    </Col>
  );
}

export default index;
