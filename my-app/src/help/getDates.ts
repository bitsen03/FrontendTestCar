const monthNames: string[] = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  
  const nameMonth = (month: number): string => {
    return monthNames[month - 1];
  }
  
  const nameMonthToIndex = (monthName: string): number => {
    return monthNames.indexOf(monthName) + 1;
  }
  
  const daysOfWeek = (year: number, month: number, day: number): string => {
    const date = new Date(year, month - 1, day);
    const dayOfWeek = date.getDay();
    const daysOfWeeks: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return daysOfWeeks[dayOfWeek];
  }
  
  const daysInMonth = (year: number, month: number): number => {
    return new Date(year, month, 0).getDate();
  }
  
  interface DayObject {
    value: number;
    year: number;
    month: number;
    daysInMonth?: number;
  }
  
  const getAllWeek = (year: number, month: number, daysInMonth: number): { [key: string]: DayObject[] } => {
    const allWeek: { [key: string]: DayObject[] } = {
      'Mon': [],
      'Tue': [],
      'Wed': [],
      'Thu': [],
      'Fri': [],
      'Sat': [],
      'Sun': [],
    };
  
    for (let i = 1; i <= daysInMonth; i++) {
      const dayOfWeek = daysOfWeek(year, month, i);
      allWeek[dayOfWeek].push({ value: i, year, month, daysInMonth });
    }
  
    return allWeek;
  }
  
  const getPredDaysMonth = (
    entries: [string, DayObject[]][], year: number, month: number
  ): [string, DayObject[]][] => {
    let dayWithPredDays = entries;
    let predMonthDays = daysInMonth(year, month - 1);
  
    const firstDayIndex = dayWithPredDays.findIndex(([, value]) => value[0].value === 1);
  
    predMonthDays -= firstDayIndex;
  
    for (let i = 0; i < firstDayIndex; i++) {
      predMonthDays += 1;
      if (dayWithPredDays[i][1].length < 6) {
        dayWithPredDays[i][1].unshift({ value: predMonthDays, year, month: month - 1 });
      }
    }
  
    return dayWithPredDays;
  }
  
  const monthString = (month: number): string => month.toString().padStart(2, '0');
  const dayString = (day: number): string => day.toString().padStart(2, '0');
  
  export { nameMonth, nameMonthToIndex, getAllWeek, getPredDaysMonth, daysOfWeek, daysInMonth, monthString, dayString };
  