import TransactionList from "../components/transaction/TransactionList";
import { Row, Col, Modal, Button } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import InputText from "../components/form/InputText";
import supabase from "../services/supabase";
function App() {
  const [show, setShow] = useState(false);
  const [expense, setExpense] = useState([]);
  const [updated, setUpdated] = useState(0);
  const { register, handleSubmit } = useForm();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleUpdated = () => {
    setUpdated((updated) => updated + 1);
  };
  const onSubmit = async (data) => {
    try {
      const { error } = await supabase.from("expense").insert({
        name: data.expenseName,
        amount: data.expenseAmount,
        categories: data.expenseCategories,
        date: data.expenseDate,
      });
      handleClose();
      if (!error) {
        handleUpdated();
      }
    } catch (error) {
      console.error(error);
      return error;
    }
  };

  useEffect(() => {
    const handleRefresh = async () => {
      try {
        let { data: expense, error } = await supabase
          .from("expense")
          .select("*");
        if (error) {
          console.error(error);
          return error;
        }
        console.log(expense);
        setExpense(expense);
      } catch (error) {
        console.error(error);
        return error;
      }
    };

    handleRefresh();
  }, [updated]);

  return (
    <div>
      <Row>
        <Col lg={6}>
          <h1>Expenses 💰 </h1>
          <p>
            List of your expense, you can create, modify or delete your expense
            here.
          </p>
        </Col>
        <Col lg={4}>
          <button
            className="d-block ms-auto button-balance p-2"
            onClick={handleShow}
          >
            Add New Expense &rarr;
          </button>
        </Col>
        <Col lg={10}>
          <InputText placeholder="search expense" />
        </Col>
      </Row>
      <Row className="mt-5">
        <Col lg={10} xs={12}>
          <TransactionList
            table="expense"
            title="Expense List"
            data={expense}
            handleUpdated={handleUpdated}
          />
        </Col>
      </Row>

      {/* modal component*/}
      <Modal centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create new expense</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mb-3">
            <form>
              <label htmlFor="expense-name" className="form-label mt-2">
                Expense Name
              </label>
              <input
                type="text"
                className="form-control"
                id="expense-name"
                placeholder="expense name"
                {...register("expenseName")}
              />
              <label htmlFor="expense-date" className="form-label mt-2">
                Expense Date
              </label>
              <input
                type="date"
                className="form-control"
                id="expense-date"
                placeholder="expense date"
                {...register("expenseDate")}
              />
              <label htmlFor="expense-name" className="form-label mt-2">
                Amount Money
              </label>
              <input
                type="number"
                className="form-control"
                id="amount-money"
                placeholder="amount money"
                {...register("expenseAmount")}
              />
              <label htmlFor="expense-category" className="form-label mt-2">
                Categories
              </label>
              <select
                name="category"
                id="expense-category"
                className="form-control"
                {...register("expenseCategories")}
              >
                <option value="food">Food</option>
                <option value="game">Game</option>
                <option value="entertaiment">Entertaiment</option>
                <option value="skincare">Skincare</option>
                <option value="shop">Shop</option>
              </select>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            type="submit"
            variant="primary"
            onClick={handleSubmit(onSubmit)}
          >
            Create
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;
