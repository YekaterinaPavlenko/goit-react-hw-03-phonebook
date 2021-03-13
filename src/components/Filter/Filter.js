import React from "react";
import fs from "./Filter.module.css";
// import PropTypes from "prop-types";
const Filter = ({ value, changeFilter }) => {
  // console.log(value);
  return (
    <div className={fs.box}>
      <label>
        <input
          type="text"
          className={fs.input}
          placeholder="Enter name"
          name="filter"
          onChange={changeFilter}
          value={value}
        ></input>
      </label>
    </div>
  );
};
export default Filter;
