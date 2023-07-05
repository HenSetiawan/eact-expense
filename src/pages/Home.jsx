import Balancecard from "../components/balance/index";
import TransactionList from "../components/transaction/TransactionList";
import { Row, Col } from "react-bootstrap";
import supabase from "../services/supabase";
import React, { useEffect, useState } from "react";
function App() {
  const [expense, setExpense] = useState([]);
  const [income, setIncome] = useState([]);
  const [updated, setUpdated] = useState(0);
  useEffect(() => {
    const handleRefresh = async () => {
      try {
        let { data: expense, expenseError } = await supabase
          .from("expense")
          .select("*")
          .limit(1);
        let { data: income, incomeError } = await supabase
          .from("income")
          .select("*")
          .limit(1);
        if (expenseError || incomeError) {
          return expenseError || incomeError;
        }
        setExpense(expense);
        setIncome(income);
      } catch (error) {
        console.error(error);
        return error;
      }
    };

    handleRefresh();
  }, [updated]);

  const handleUpdated = () => {
    setUpdated((updated) => updated + 1);
  };
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
          <TransactionList handleUpdated={handleUpdated} table="income" data={income} title="Recent Income" />
        </Col>
        <Col lg={6} xs={12}>
          <TransactionList
            handleUpdated={handleUpdated}
            table="expense"
            data={expense}
            title="Recent Expense"
          />
        </Col>
      </Row>
    </div>
  );
}

export default App;
