import React from "react";
import { addYear, addMonth } from "../redux/currentDateSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { nameMonthToIndex } from "../help/nameMonth.ts";

interface SelectDateBtnProps {
    children: string;
    arr: (number | string)[];
}

const SelectDateBtn: React.FC<SelectDateBtnProps> = ({ children, arr }) => {
const [selectedOption, setSelectedOption] = useState(children);
const dispatch = useDispatch();

const handleOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedOption(value);
    typeof arr[0] === 'number' ? dispatch(addYear({ year: value })) : dispatch(addMonth({ month: nameMonthToIndex(value) }))
}

return (
    <select className="selectDateBtn" value={selectedOption} onChange={handleOptionChange}>
        {arr.map((el, i) => (
            <option key={i} value={el}>
                {el}
            </option>
        ))}
    </select>
);
}

export default SelectDateBtn;
