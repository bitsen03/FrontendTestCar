import React from "react";
import SelectDateBtn from "./SelectDateBtn.tsx";
import { selectCurrentDate } from '../redux/currentDateSlice';
import { useSelector } from 'react-redux';
import { nameMonth } from "../help/getDates.ts";

const SelectDate: React.FC = () => {
    const arrYear:number[] = []
    let {year, month} = useSelector(selectCurrentDate)
    
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    for (let i = 2000; i <= 2026; i++) {
        arrYear.push(i);
    }

    return (
        <div className="selectDate">
            <SelectDateBtn arr={arrYear}>{year}</SelectDateBtn>
            <SelectDateBtn arr={monthNames}>{nameMonth(month)}</SelectDateBtn>
        </div>
    )
}

export default SelectDate;