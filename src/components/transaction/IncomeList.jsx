import React from "react";
import { Card } from "react-bootstrap";
import IncomeItem from "./IncomeItem";

function IncomeList(props) {
  return (
    <Card className="p-4 mb-5 font-jakarta-sans">
      <div className="d-flex align-items-center justify-content-between transaction">
        <h2>Income List</h2>
        <a href="" className="text-decoration-none">
          VIEW MORE
        </a>
      </div>
      <div className="transaction-list mt-5">
        {props.data.map((income) => {
          return (
            <IncomeItem
              id={income.id}
              key={income.id}
              title={income.name}
              date={income.date}
              amount={income.amount}
            />
          );
        })}
      </div>
    </Card>
  );
}

export default IncomeList;
