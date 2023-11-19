import TransactionList from "../components/transaction/TransactionList";
import { Row, Col, Modal, Button } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import InputText from "../components/form/InputText";
import supabase from "../services/supabase";
function App() {
  const [show, setShow] = useState(false);
  const [income, setExpense] = useState([]);
  const [updated, setUpdated] = useState(0);

  const handleRefresh = async () => {
    try {
      let { data: income, error } = await supabase.from("income").select("*");
      if (error) {
        console.error(error);
        return error;
      }
      setExpense(income);
    } catch (error) {
      console.error(error);
      return error;
    }
  };

  useEffect(() => {
    handleRefresh();
  }, [updated]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleUpdated = () => {
    setUpdated((updated) => updated + 1);
  };

  return (
    <div>
      <Row>
        <Col lg={6}>
          <h1>Income 💰 </h1>
          <p>
            List of your income, you can create, modify or delete your income
            here.
          </p>
        </Col>
        <Col lg={4}>
          <button
            className="d-block ms-auto button-balance p-2"
            onClick={handleShow}
          >
            Add New Income &rarr;
          </button>
        </Col>
        <Col lg={10}>
          <InputText placeholder="search income" />
        </Col>
      </Row>
      <Row className="mt-5">
        <Col lg={10} xs={12}>
          <TransactionList
            table="income"
            title="Income List"
            data={income}
            handleUpdated={handleUpdated}
          />
        </Col>
      </Row>

      {/* modal component*/}
      <Modal centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create new income</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mb-3">
            <label htmlFor="expense-name" className="form-label mt-2">
              Expense Name
            </label>
            <input
              type="text"
              className="form-control"
              id="expense-name"
              placeholder="expense name"
            />
            <label htmlFor="expense-date" className="form-label mt-2">
              Expense Date
            </label>
            <input
              type="date"
              className="form-control"
              id="expense-date"
              placeholder="expense date"
            />
            <label htmlFor="expense-name" className="form-label mt-2">
              Amount Money
            </label>
            <input
              type="number"
              className="form-control"
              id="amount-money"
              placeholder="amount money"
            />
            <label htmlFor="expense-category" className="form-label mt-2">
              Categories
            </label>
            <select
              name="category"
              id="expense-category"
              className="form-control"
            >
              <option value="food">Food</option>
              <option value="game">Game</option>
            </select>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button type="submit" variant="primary" onClick={handleClose}>
            Create
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;
