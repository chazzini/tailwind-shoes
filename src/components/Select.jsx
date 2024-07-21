import { IoIosArrowDown } from "react-icons/io";
const Select = ({ title, options }) => {
  return (
    <div className="relative">
      <select
        defaultValue={""}
        className="w-24 appearance-none border border-gray-300 p-4 rounded-md bg-white"
      >
        <option value="" disabled hidden>
          {title}
        </option>
        {options.map((option) => {
          return (
            <option key={option} value={option}>
              {option}
            </option>
          );
        })}
      </select>
      <div className="absolute inset-y-0 right-3 flex-center">
        <IoIosArrowDown />
      </div>
    </div>
  );
};

export default Select;
