import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import expense from "../../assets/images/expense.png";
import { BsTrash } from "react-icons/bs";
import { CiEdit } from "react-icons/ci";
import { Tooltip } from "react-tippy";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

function IncomeItem(props) {
  const { register, reset, getValues } = useForm();
  const dispatch = useDispatch();
  const [showDelConfirmation, setShowDelConfirmation] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);

  let IDRupiah = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  });

  const setDefaultValueModalEdit = (data) => {};

  const getTransactionById = async (id) => {};
  const handleDelete = async (id) => {};

  const handleEditData = async (id, data) => {};
  return (
    <div className="transaction-item mb-4">
      <div className="d-flex">
        <img src={expense} alt="expense" />
        <div className="ms-4">
          <p className="transaction-title">{props.title}</p>
          <p className="transaction-date text-capitalize">{props.category}</p>
          <p className="transaction-date">{props.date}</p>
        </div>
        <p className="ms-4">{IDRupiah.format(props.amount)}</p>
        <div className="d-flex ms-auto">
          <Tooltip
            title="Edit Transaction"
            position="bottom"
            trigger="mouseenter"
            theme="light"
            arrow={true}
          >
            <button
              className="btn btn-sm border px-3 py-3"
              onClick={async () => {
                  const transactionData = await getTransactionById(props.id);
                  setDefaultValueModalEdit(transactionData);
                  setShowModalEdit(true);
              }}
            >
              <CiEdit />
            </button>
          </Tooltip>
          <Tooltip
            title="Delete Transaction"
            position="bottom"
            trigger="mouseenter"
            theme="light"
            arrow={true}
          >
            <button
              onClick={() => {
                setShowDelConfirmation(true);
              }}
              className="btn btn-sm border ms-2 px-3 py-3"
            >
              <BsTrash />
            </button>
          </Tooltip>
        </div>
      </div>
      <Modal
        centered
        show={showDelConfirmation}
        onHide={() => {
          setShowDelConfirmation(false);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Delete Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="text-center">
            Are you sure you want to the delete data?
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              setShowDelConfirmation(false);
            }}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            variant="primary"
            onClick={() => {
              handleDelete(props.id);
              setShowDelConfirmation(false);
            }}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal
        centered
        show={showModalEdit}
        onHide={() => {
          setShowModalEdit(false);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Income</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mb-3">
            <form>
              <label htmlFor="expense-name" className="form-label mt-2">
                Income Name
              </label>
              <input
                type="text"
                className="form-control"
                id="expense-name"
                placeholder="expense name"
                {...register("expenseName")}
              />
              <label htmlFor="expense-date" className="form-label mt-2">
                Income Date
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
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              setShowModalEdit(false);
            }}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            variant="primary"
            onClick={() => {
              const values = getValues();
              handleEditData(props.id, values);
              setShowModalEdit(false);
            }}
          >
            Edit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default IncomeItem;
