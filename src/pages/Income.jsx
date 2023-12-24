import { Row, Col, Modal, Button } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import InputText from "../components/form/InputText";
import { useDispatch, useSelector } from "react-redux";
import {
  insertIncome,
  fetchIncome,
} from "../redux/features/income/incomeSlice";
import IncomeList from "../components/transaction/IncomeList";

function App() {
  const [show, setShow] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState("");
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const contents = useSelector((state) => state.income.contents);
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    dispatch(insertIncome(data));
  };

  useEffect(() => {
    dispatch(fetchIncome());
  }, [dispatch]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
          <IncomeList
            data={contents.filter((income) =>
              income.name.toLowerCase().includes(searchKeyword.toLowerCase())
            )}
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
            <label htmlFor="income-name" className="form-label mt-2">
              Income Name
            </label>
            <input
              type="text"
              className={`form-control ${
                errors.expenseName ? "border border-danger" : ""
              }`}
              id="income-name"
              placeholder="income name"
              {...register("expenseName", { required: true })}
            />
            {errors.expenseName?.type === "required" && (
              <p role="alert" className="text-danger mt-2 fs-6 fst-italic">
                expense name is required
              </p>
            )}
            <label htmlFor="income-date" className="form-label mt-2">
              Income Date
            </label>
            <input
              type="date"
              className={`form-control ${
                errors.expenseDate ? "border border-danger" : ""
              }`}
              id="income-date"
              placeholder="income date"
              {...register("expenseDate", { required: true })}
            />
            {errors.expenseDate?.type === "required" && (
              <p role="alert" className="text-danger mt-2 fs-6 fst-italic">
                expense date is required
              </p>
            )}
            <label htmlFor="income-name" className="form-label mt-2">
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
                expense amount is required
              </p>
            )}
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
