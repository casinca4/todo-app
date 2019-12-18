import React from 'react';

function FormContainer() {
  return (                            // man muß immer was return
    <div className="form-container">
      <form className="todo-form">
        <label className="input-item">
          <input type="text" name="todo" />
        </label>
        <input className="btn" type="submit" value="ADD" />
      </form>
    </div>
  );
}

export default FormContainer;