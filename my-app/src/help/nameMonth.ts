const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

const nameMonth = (month:number) => {
    return monthNames[month - 1]
}

const nameMonthToIndex = (nameMonth: string) => {
  return monthNames.indexOf(nameMonth) + 1;
}

const daysOfWeek = (year: number, month: number, day: number):string => {
    let date = new Date(year, month - 1, day)
    let dayOfWeeks = date.getDay();
    const daysOfWeeks = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let dayName = daysOfWeeks[dayOfWeeks];
    
    return dayName;
}
    
const daysInMonth = (year: number, month: number):number => {
    return new Date(year, month, 0).getDate();
}

const getAllWeek = (year, month, daysInMonth) => {
    const allWeek: { [key: string]: (object)[] } = {
        'Mon': [],
        'Tue': [],
        'Wed': [],
        'Thu': [],
        'Fri': [],
        'Sat': [],
        'Sun': [],
    };
    
    for (let i = 1; i <= daysInMonth; i += 1) {
        const dayOfWeek = daysOfWeek(year, month, i)
        allWeek[dayOfWeek].push({value:i, year, month, daysInMonth});
    }
    return  allWeek
}

const getPredDaysMonth = (entries, year, month) => {
    let dayWithPredDays = entries
    let predMonth = daysInMonth(year, month - 1)

    const indices = dayWithPredDays.reduce((acc, [key, value], indx) => {
        if (value[0].value === 1) {
            acc = indx;
        }
        return acc;
    }, 0);
    predMonth = predMonth - indices 

    for (let i = 0; i < indices ; i += 1) {
        predMonth = predMonth + 1;
        if (dayWithPredDays[i][1].length < 6){
            dayWithPredDays[i][1].unshift({value:predMonth, year, month: month - 1})
        }
    }

    return dayWithPredDays
}

const getNextDaysMonth = (entries, nextMonth, countDayInMonth) => {
    
    const indices = entries.reduce((acc, [key, value], indx) => {
        if (value[5] === countDayInMonth) {
            acc = indx;
        }
        return acc;
    }, 0);
    console.log(indices)
    nextMonth = nextMonth - indices 

    for (let i = 0; i < indices ; i += 1) {
        nextMonth = nextMonth + 1;
        if (entries[i][1].length < 5){
            entries[i][1].push(nextMonth)
        }
    }

    return entries
}

export {nameMonth, nameMonthToIndex, getAllWeek, getPredDaysMonth, getNextDaysMonth}