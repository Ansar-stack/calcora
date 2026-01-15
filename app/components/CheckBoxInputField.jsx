import React from "react";

const CheckBoxInputField = ({
  label,
  onChangeHanlder = () => {},
  value = false,
  classes = ''
}) => {
 
  return (
    <div className={`flex ${classes} items-center gap-2`}>
      <input
        type="checkbox"
        name={label}
        onChange={onChangeHanlder}
        value={value}
        checked={value?true:false}
        className="w-5 h-4 accent-green-700"
      />
      <label htmlFor={label} className="font-semibold sm:text-md text-lg">
        {label}
      </label>
    </div>
  );
};

export default CheckBoxInputField;
