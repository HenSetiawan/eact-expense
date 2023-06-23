import React from "react";
import { Card } from "react-bootstrap";
import TransactionItem from "./TransactionItem";

function TransactionList(props) {
  return (
    <Card className="p-4 mb-5 font-jakarta-sans">
      <div className="d-flex align-items-center justify-content-between transaction">
        <h2>{props.title}</h2>
        <a href="" className="text-decoration-none">
          VIEW MORE
        </a>
      </div>
      <div className="transaction-list mt-5">
        {props.data.map((item) => {
          return <TransactionItem key={item.id} title={item.name} date={item.date} amount={item.amount} />;
        })}
      </div>
    </Card>
  );
}

export default TransactionList;
