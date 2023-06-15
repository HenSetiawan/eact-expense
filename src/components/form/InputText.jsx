import React from 'react'

function Input({placeholder}) {
  return (
    <div className="input-group mb-3">
        <input type="text" className="form-control bg-light" placeholder={placeholder} />
    </div>
   );
}

export default Input