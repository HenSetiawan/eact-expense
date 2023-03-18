import React from "react";
import { Card } from "react-bootstrap";
import TransactionItem from "./TransactionItem";

function TransactionList(props) {
  return (
      <Card className="p-4 font-jakarta-sans">
        <div className="d-flex align-items-center justify-content-between transaction">
          <h2>{props.title}</h2>
          <a href="" className="text-decoration-none">
            VIEW MORE
          </a>
        </div>
        <div className="transaction-list mt-5">
          <TransactionItem />
        </div>
      </Card>
  );
}

export default TransactionList;
