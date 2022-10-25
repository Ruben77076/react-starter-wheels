import React, { useState } from "react";
function Person() {
  const [formData, setFormData] = useState({
    fristName: "",
    lastName: "",
    avatarUrl: "",
  });
  const onHandleChange = (evt) => {
    // const name = evt.target;
    // const value = evt.target;
    const { name, value } = evt.target;
    setFormData((prevState) => {
      let obj = { ...prevState };
      obj[name] = value;
      return obj;
    });
  };
  return (
    <div>
      <form>
        <div class="mb-3">
          <label for="fristName" class="form-label">
            Frist Name
          </label>
          <input
            type="text"
            class="form-control"
            name="fristName"
            value={formData.fristName}
            onChange={onHandleChange}
          />
        </div>
        <div class="mb-3">
          <label for="lastName" class="form-label">
            Last Name
          </label>
          <input
            type="text"
            class="form-control"
            name="lastName"
            value={formData.lastName}
            onChange={onHandleChange}
          />
        </div>
        <button type="button" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
export default Person;