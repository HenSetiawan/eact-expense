import { fetchExpense } from "../redux/features/expense/expenseSlice";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import Balancecard from "../components/balance/index";
import ExpenseList from "../components/transaction/ExpenseList";
import { Row, Col } from "react-bootstrap";

function App() {
  const contents = useSelector((state) => state.expense.contents);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchExpense());
  }, []);

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
        <Col lg={6} xs={12}></Col>
        <Col lg={6} xs={12}>
          <ExpenseList table="expense" data={contents} title="Recent Expense" />
        </Col>
      </Row>
    </div>
  );
}

export default App;
