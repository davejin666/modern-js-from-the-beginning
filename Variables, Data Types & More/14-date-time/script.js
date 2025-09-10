console.log(Date()); // Wed Sep 10 2025 09:59:38 GMT+0800 (China Standard Time)

const today = new Date();
console.log(today); // Wed Sep 10 2025 09:59:38 GMT+0800 (China Standard Time)
console.log(today.toString()); // Wed Sep 10 2025 09:59:38 GMT+0800 (China Standard Time)

const xmax95 = new Date(1995, 11, 25, 9, 30, 25);
console.log(xmax95); // Mon Dec 25 1995 09:30:25 GMT+0800 (China Standard Time)

const yearEnd = new Date(2025, 12, 31, 23, 59, 59, 999);
const msPerDay = 24 * 60 * 60 * 1000;

const daysToYearEnd = Math.floor(
    (yearEnd.getTime() - today.getTime()) / msPerDay
);
console.log(daysToYearEnd);

function JSClock() {
    const today = new Date();

    const hrs = today.getHours();
    const mins = today.getMinutes();
    const secs = today.getSeconds();

    let temp = String(hrs % 12);

    if (temp === '0') {
        temp = '12';
    }

    temp += (mins < 10 ? ':0' : ':') + mins;
    temp += (secs < 10 ? ':0' : ':') + secs;
    temp += ` ${hrs >= 12 ? 'PM' : 'AM'}`;

    return temp;
}

console.log(JSClock());

console.log(Date.now()); // Unix timestamp

const bDay = new Date('07-16-1988 02:10:00');
console.log(bDay.getTime()); // 584989800000
console.log(bDay.valueOf()); // 584989800000
console.log(new Date(584989800000)); // Sat Jul 16 1988 02:10:00 GMT+0900 (China Daylight Time)
console.log(bDay.getMonth()); // 6 Months are zero-indexed

/* 
    toLocalString
*/
const date = new Date(Date.UTC(2020, 11, 20, 3, 23, 16, 738));

console.log(new Intl.DateTimeFormat('en-US').format(date)); // "12/20/2020"

// Specify date and time format using "style" options (i.e. full, long, medium, short)
console.log(
    new Intl.DateTimeFormat('en-GB', {
        dateStyle: 'full',
        timeStyle: 'long',
        timeZone: 'Australia/Sydney',
    }).format(date)
); // "Sunday, 20 December 2020 at 14:23:16 GMT+11"
