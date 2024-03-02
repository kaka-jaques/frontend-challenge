var dateObject = new Date();
var day = dateObject.getUTCDate().toString().padStart(2, '0');
var date = dateObject.getUTCDay() + 1;
var month = dateObject.getUTCMonth() + 1;
var year = dateObject.getUTCFullYear();
const weekText: { [key: number]: string } = {
    1: 'Sunday',
    2: 'Monday',
    3: 'Tuesday',
    4: 'Wednesday',
    5: 'Thursday',
    6: 'Friday',
    7: 'Saturday'
}
const monthText: { [key: number]: string } = {
    1: 'Jan',
    2: 'Feb',
    3: 'Mar',
    4: 'Apr',
    5: 'May',
    6: 'Jun',
    7: 'Jul',
    8: 'Aug',
    9: 'Sep',
    10: 'Oct',
    11: 'Nov',
    12: 'Dec'
};

function Calendar() {
    return <div id='calendar'>
        <div id='full-date'>
            <ul>
                <li>
                    <h1>{day}</h1>
                </li>
                <li>
                    <div>
                        <p id='month'>{monthText[month]}</p>
                        <p>{year}</p>
                    </div>
                </li>
            </ul>
        </div>
        <div id='week-day'>
            <p>{weekText[date]}</p>
        </div>
    </div>
}

export default Calendar;