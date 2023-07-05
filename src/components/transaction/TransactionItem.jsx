import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import food from "../../assets/images/food.svg";
import { BsTrash } from "react-icons/bs";
import { CiEdit } from "react-icons/ci";
import { Tooltip } from "react-tippy";
import supabase from "../../services/supabase";

function TransactionItem(props) {
  const [showDelConfirmation, setShowDelConfirmation] = useState(false);

  const handleCloseDelConfirmation = () => {
    setShowDelConfirmation(false);
  };

  const handleShowDelConfirmation = () => {
    setShowDelConfirmation(true);
  };

  const handleDelete = async (id, table) => {
    const { error } = await supabase.from(table).delete().eq("id", id);
  };
  return (
    <div className="transaction-item mb-4">
      <div className="d-flex">
        <img src={food} alt="food" />
        <div className="ms-4">
          <p className="transaction-title">{props.title}</p>
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
            <button className="btn btn-sm border px-3 py-3">
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
              props.handleUpdated();
              handleCloseDelConfirmation();
            }}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default TransactionItem;
