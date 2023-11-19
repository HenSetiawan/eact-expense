import { Row, Col, Modal, Button } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import InputText from "../components/form/InputText";
import supabase from "../services/supabase";
function App() {
  const [show, setShow] = useState(false);
  const [income, setExpense] = useState([]);

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
  }, []);

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
              className="form-control"
              id="income-name"
              placeholder="income name"
            />
            <label htmlFor="income-date" className="form-label mt-2">
              Income Date
            </label>
            <input
              type="date"
              className="form-control"
              id="income-date"
              placeholder="income date"
            />
            <label htmlFor="income-name" className="form-label mt-2">
              Amount Money
            </label>
            <input
              type="number"
              className="form-control"
              id="amount-money"
              placeholder="amount money"
            />
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
