const daysOfWeek = (year: number, month: number, day: number):string => {
let date = new Date(year, month - 1, day)
let dayOfWeeks = date.getDay();
const daysOfWeeks = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
let dayName = daysOfWeeks[dayOfWeeks];

return dayName
}

export default daysOfWeek;
