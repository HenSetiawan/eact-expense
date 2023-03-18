import React from "react";

function index() {
  return (
    <div className="balance-card p-4 font-jakarta-sans">
      <p className="balance-title">Hi Dikamsi, here is your balance:</p>
      <p className="balance-number">₦1,100,000,000.00</p>
      <a className="button-balance me-3 p-2" href="#">
        {" "}
        Add New Income &rarr;
      </a>
      <a className="button-balance p-2" href="">
        Add New Expense &rarr;
      </a>
    </div>
  );
}

export default index;
