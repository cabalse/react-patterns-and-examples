import { useState } from "react";

interface Props {
  children: React.ReactNode;
}

const Accordion = ({ children }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full">
      <div className="bg-white shadow-md rounded-lg border border-gray-200">
        <div
          className="p-4 cursor-pointer hover:bg-gray-50 flex justify-between items-center transition-colors duration-200"
          onClick={() => setOpen(!open)}
        >
          <span className="font-medium text-gray-900">Click to toggle</span>
          <span
            className={`text-xl font-bold transition-transform duration-200 ${
              open ? "rotate-45" : ""
            }`}
          >
            +
          </span>
        </div>
        {open && (
          <div className="px-4 pb-4 pt-0 text-gray-700 border-t border-gray-100">
            {children}
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
