import React from "react";

const SelectOptionsInputField = ({
    label = "",
    name = "",
    handleChanges = ()=>{},
    value = "", 
    options = [],
    classes = ""
}) => {
  return (
    <div>
      <label htmlFor={name} className="font-semibold block">
        {label}
      </label>
      <select
        className={`${classes} selectInput`}
        onChange={handleChanges}
        name={name}
        value={value}
      >
        {
            options.map((elem, index)=>(
                <option key={index} value={elem}>{elem}</option>
            ))
        }
      </select>
    </div>
  );
};

export default SelectOptionsInputField;
