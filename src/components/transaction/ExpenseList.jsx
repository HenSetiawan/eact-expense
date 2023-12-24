import React from "react";
import { Card } from "react-bootstrap";
import ExpenseItem from "./ExpenseItem";

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
        {props.data?.map((item) => {
          return (
            <ExpenseItem
              id={item.id}
              key={item.id}
              title={item.name}
              date={item.date}
              amount={item.amount}
              category={item.categories}
            />
          );
        })}
      </div>
    </Card>
  );
}

export default TransactionList;
