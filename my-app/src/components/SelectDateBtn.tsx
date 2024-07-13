import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addYear, addMonth } from "../redux/currentDateSlice";
import { nameMonthToIndex } from "../help/getDates.ts";

interface SelectDateBtnProps {
    children: string;
    arr: (number | string)[];
}

const SelectDateBtn: React.FC<SelectDateBtnProps> = ({ children, arr }) => {
    const [selectedOption, setSelectedOption] = useState<string>(children); // Явно указываем тип selectedOption
    const dispatch = useDispatch();

    const handleOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        setSelectedOption(value);
        if (typeof arr[0] === 'number') {
            dispatch(addYear({ year: +value })); // Преобразуем value в число, если arr[0] является числом
        } else {
            dispatch(addMonth({ month: nameMonthToIndex(value) }));
        }
    };

    return (
        <select className="selectDateBtn" value={selectedOption} onChange={handleOptionChange}>
            {arr.map((el, i) => (
                <option key={i} value={el}>
                    {el}
                </option>
            ))}
        </select>
    );
};

export default SelectDateBtn;
