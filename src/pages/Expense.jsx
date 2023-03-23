import TransactionList from "../components/transaction/TransactionList";
import { Row, Col, Modal, Button } from "react-bootstrap";
import React, { useState } from 'react';
import InputText from '../components/form/InputText';
function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
        <Row>
            <Col lg={6}>
                <h1>Expenses 💰 </h1>
                <p>List of your expense, you can create, modify or delete your expense here.</p>
            </Col>
            <Col lg={4}>
                <button className="d-block ms-auto button-balance p-2" onClick={handleShow}>Add New Expense &rarr;</button>
            </Col>
            <Col lg={10}>
              <InputText />
            </Col>
        </Row>
        <Row className="mt-5">
          <Col lg={10} xs={12}>
          <TransactionList title="Expense List"/>
          </Col>
        </Row>

        {/* modal component*/}
        <Modal centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create new expense</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <div class="mb-3">
            <label htmlFor="expense-name" className="form-label mt-2">Expense Name</label>
            <input type="text" className="form-control" id="expense-name" placeholder="expense name"/>
            <label htmlFor="expense-date" className="form-label mt-2">Expense Date</label>
            <input type="date" className="form-control" id="expense-date" placeholder="expense date"/>
            <label htmlFor="expense-name" className="form-label mt-2">Amount Money</label>
            <input type="number" className="form-control" id="amount-money" placeholder="amount money"/>
            <label htmlFor="expense-category" className="form-label mt-2">Categories</label>
            <select name="category" id="expense-category" className="form-control">
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
