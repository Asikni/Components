import { useState } from "react";
import { GoChevronDown } from "react-icons/go";

function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false); //starting pe we want dropdown to be closed

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    // CLOSE DROPDOWN
    setIsOpen(false);
    // WHAT OPTION DID THE USER CLICK ON???
    onChange(option); //could have got setSelection directly here as prop to drop and similar function would have taken place
  };

  const renderedOptions = options.map((option) => {
    return (
      <div
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        onClick={() => handleOptionClick(option)} // takes both label and value of the option 
        key={option.value}
      >
        {option.label} {/*gets all the labels*/}
  
      </div>
    );
  });

  return (
    <div className="w-48 relative">
      <div
        className="flex justify-between items-center cursor-pointer border rounded p-3 shadow bg-white w-full"
        onClick={handleClick}
      >
        {value?.label || "Select..."}{" "} {/* what we get in the dropdown search bar */}
        {/*value?.label means "if value is not null or undefined, then access its label property; otherwise, return undefined., here it is {value and label and we are choosing label here}"*/}
        <GoChevronDown className="text-lg" />
      </div>
      {isOpen && ( //if isopen is true then return the dropdown list
        <div className="absolute top-full border rounded p-3 shadow bg-white w-full">
          {renderedOptions}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
