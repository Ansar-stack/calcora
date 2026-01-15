import React from "react";

const InputField = React.memo(({
  type = "text",
  placeholder = "",
  name = "",
  value = "",
  classes = "",
  handleChanges = () => {},
  min,
  max,
  autoFocus=false,
  readOnly = false,
  label = "",
  onKeyup = ()=>{}, 
}) =>{
  return (
    <>
    {label && <label htmlFor={name} className="font-semibold block">{label}</label>}
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onKeyUp={onKeyup}
      readOnly = {readOnly}
      className={`w-full px-3 py-1 outline-0 border border-gray-400 rounded-md ${classes}`}
      onChange={handleChanges}
      min={min}
      max={max}
      autoFocus={autoFocus}
      
    />
    </>
  );
});

export default InputField;
