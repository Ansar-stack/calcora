import React from 'react'

const BlueBtn = React.memo(({btnText, onClickFunction= ()=>{}, type='button', classes=``}) => {
 
  return (
    <button
          onClick={onClickFunction}
          type={type}
          className={`px-5 py-1 bg-[#2563eb] hover:shadow-sm hover:shadow-indigo-200 duration-150 hover:bg-blue-800 text-white
           font-semibold text-lg active:scale-95 rounded-md cursor-pointer  ${classes}`}
        >
          {btnText}
        </button>
  )
});

export default BlueBtn