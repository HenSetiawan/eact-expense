import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import expense from "../../assets/images/expense.png";
import { BsTrash } from "react-icons/bs";
import { CiEdit } from "react-icons/ci";
import { Tooltip } from "react-tippy";
import supabase from "../../services/supabase";
import { useForm } from "react-hook-form";

function TransactionItem(props) {
  const { register, reset, getValues } = useForm();
  const [showDelConfirmation, setShowDelConfirmation] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);

  const handleCloseDelConfirmation = () => {
    setShowDelConfirmation(false);
  };

  const handleShowDelConfirmation = () => {
    setShowDelConfirmation(true);
  };

  const handleCloseModalEdit = () => {
    setShowModalEdit(false);
  };

  const setDefaultValueModalEdit = (table, data) => {
    let defaultValues = {};
    if (table === "expense") {
      defaultValues.expenseName = data.name;
      defaultValues.expenseDate = data.date;
      defaultValues.expenseAmount = data.amount;
      defaultValues.expenseCategories = data.category;
    }
    reset({ ...defaultValues });
  };

  const getTransactionById = async (id) => {
    try {
      const { data, error } = await supabase
        .from(props.table)
        .select("*")
        .eq("id", id);
      if (error) {
        return error;
      }
      return data[0];
    } catch (error) {
      console.log(error);
    }
  };
  const handleDelete = async (id, table) => {
    const { error } = await supabase.from(table).delete().eq("id", id);
  };

  const handleEditData = async (id, table, data) => {
    if (table === 'expense') {
          const { error } = await supabase
            .from(table)
            .update({
              name: data.expenseName,
              amount: data.expenseAmount,
              categories: data.expenseCategories,
              date: data.expenseDate,
            })
            .eq("id", id);
          if (error) {
            console.log(error);
          }
    }
  }
  return (
    <div className="transaction-item mb-4">
      <div className="d-flex">
        <img src={expense} alt="expense" />
        <div className="ms-4">
          <p className="transaction-title">{props.title}</p>
          <p className="transaction-date text-capitalize">{props.category}</p>
          <p className="transaction-date">{props.date}</p>
        </div>
        <p className="ms-4">{props.amount}</p>
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
                if (props.table === "expense") {
                  const transactionData = await getTransactionById(props.id);
                  setDefaultValueModalEdit("expense", transactionData);
                  setShowModalEdit(true);
                }
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
                handleShowDelConfirmation();
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
        onHide={handleCloseDelConfirmation}
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
          <Button variant="secondary" onClick={handleCloseDelConfirmation}>
            Cancel
          </Button>
          <Button
            type="submit"
            variant="primary"
            onClick={() => {
              handleDelete(props.id, props.table);
              handleCloseDelConfirmation();
            }}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal centered show={showModalEdit} onHide={handleCloseModalEdit}>
        <Modal.Header closeButton>
          <Modal.Title>Edit expense</Modal.Title>
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
                <option value="primaty">Primary</option>
                <option value="secondary">Secondary</option>
                <option value="tertiary">Tertiary</option>
              </select>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModalEdit}>
            Cancel
          </Button>
          <Button type="submit" variant="primary" onClick={
            () => {
              const values = getValues();
              handleEditData(props.id, props.table, values);
              props.handleUpdated();
              handleCloseModalEdit();
           }
          }>
            Edit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default TransactionItem;
