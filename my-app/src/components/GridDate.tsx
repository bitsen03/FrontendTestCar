import React from "react"
import { useEffect, useState } from "react"
import daysInMonth from "../help/daysInMonth.ts";
import daysOfWeek from "../help/daysOfWeek.ts";
import DayCard from "./DayCard.tsx";
import WeekCard from "./WeekCard.tsx";

export default function GridDate () {
let currentDate = new Date();
let year = currentDate.getFullYear();
let month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); 
let day = currentDate.getDate().toString().padStart(2, '0');


let formattedDate = `${year}-${month}-${day}`;

let countDayInMonth = daysInMonth(year, +month);

const allMonth: { [key: string]: number[] } = {
    'Mon': [],
    'Tue': [],
    'Wed': [],
    'Thu': [],
    'Fri': [],
    'Sat': [],
    'Sun': [],
};

const qwe = Object.entries(allMonth);
console.log(qwe)
for (let i = 1; i <= countDayInMonth; i += 1) {
    const dayOfWeek = daysOfWeek(year, +month, i)
    allMonth[dayOfWeek].push(i);
}

    fetch(`https://isdayoff.ru/${year}${month}${day}`)
    .then((response) =>response.json())
    .then((json) => console.log(json))

    return (
        <div className="container">
         <div className="all-day">
            {qwe.map(([keys, value], indx) =>
                <div className="column-week">
                 <h3 className="day-of-week">{keys}</h3>
                 <WeekCard key={indx} keys={keys}>{value}</WeekCard>
                </div>)}
         </div>
        </div>

    )
} 