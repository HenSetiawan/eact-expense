import React from "react";
import food from "../../assets/images/food.svg";
import { BsTrash } from "react-icons/bs";
import { CiEdit } from "react-icons/ci";
import { Tooltip } from "react-tippy";

function TransactionItem(props) {
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
            <button className="btn btn-sm border ms-2 px-3 py-3">
              <BsTrash />
            </button>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}

export default TransactionItem;
