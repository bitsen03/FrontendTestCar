import React, { useState, createContext} from "react"
import { useSelector } from 'react-redux';
import WeekCard from "./WeekCard.tsx";
import { selectCurrentDate } from "../redux/currentDateSlice.js";
import SelectDate from "./SelectDate.tsx";
import { getAllWeek, getPredDaysMonth, daysInMonth,  } from "../help/getDates.ts";
import ModalDate from "./modal/ModalDates.tsx";
import ModalProvider from "./ModalProvider.tsx";

export default function GridDate () {
const [modalActive, setModalActive] = useState(false);

let {year, month, day} = useSelector(selectCurrentDate)
let countDayInMonth = daysInMonth(year, month);

const allWeek = getAllWeek(year, month, countDayInMonth)
const entries = Object.entries(allWeek);
const monthWithPredDays = getPredDaysMonth(entries, year, month)


return (
    <div className="container">
        <ModalProvider>
            <main>
            <SelectDate></SelectDate>
            <div className="all-day">
            {monthWithPredDays.map(([keys, value], indx) => 
                <div className="column-week" key={indx}>
                    <h3 className="day-of-week">{keys}</h3>
                    <WeekCard keys={keys}>{value}</WeekCard>
                </div>
            )}
            </div>
        <ModalDate active={modalActive} setActive={setModalActive} />
        </main>
        </ModalProvider>

    </div>
);
} 

