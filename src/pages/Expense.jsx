import ExpenseList from "../components/transaction/ExpenseList";
import { Row, Col, Modal, Button } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import InputText from "../components/form/InputText";
import supabase from "../services/supabase";
function App() {
  const [show, setShow] = useState(false);
  const [expense, setExpense] = useState([]);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onSubmit = async (data) => {
    try {
      const { error } = await supabase.from("expense").insert({
        name: data.expenseName,
        amount: data.expenseAmount,
        categories: data.expenseCategories,
        date: data.expenseDate,
      });
      handleClose();
    } catch (error) {
      console.error(error);
      return error;
    }
  };

  const handleRefresh = async () => {
    try {
      let { data: expense, error } = await supabase.from("expense").select("*");
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

  useEffect(() => {
    handleRefresh();
  }, []);

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
          <ExpenseList
            table="expense"
            title="Expense List"
            data={expense}
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
                className={`form-control ${
                  errors.expenseName ? "border border-danger" : ""
                }`}
                id="expense-name"
                placeholder="expense name"
                {...register("expenseName", { required: true })}
              />
              {errors.expenseName?.type === "required" && (
                <p role="alert" className="text-danger mt-2 fs-6 fst-italic">
                  expense name is required
                </p>
              )}
              <label htmlFor="expense-date" className="form-label mt-2">
                Expense Date
              </label>
              <input
                type="date"
                className={`form-control ${
                  errors.expenseDate ? "border border-danger" : ""
                }`}
                id="expense-date"
                placeholder="expense date"
                {...register("expenseDate", { required: true })}
              />
              {errors.expenseDate?.type === "required" && (
                <p role="alert" className="text-danger mt-2 fs-6 fst-italic">
                  expense date is required
                </p>
              )}
              <label htmlFor="expense-name" className="form-label mt-2">
                Amount Money
              </label>
              <input
                type="number"
                className={`form-control ${
                  errors.expenseAmount ? "border border-danger" : ""
                }`}
                id="amount-money"
                placeholder="amount money"
                {...register("expenseAmount", { required: true })}
              />
              {errors.expenseAmount?.type === "required" && (
                <p role="alert" className="text-danger mt-2 fs-6 fst-italic">
                  expense date is required
                </p>
              )}
              <label htmlFor="expense-category" className="form-label mt-2">
                Categories
              </label>
              <select
                name="category"
                id="expense-category"
                className="form-control"
                {...register("expenseCategories")}
              >
                <option value="primary">Primary</option>
                <option value="secondary">Secondary</option>
                <option value="tertiary">Tertiary</option>
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
