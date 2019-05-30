// Returns current date and time as string.
// Default format is YYMMDD-HHMMSS .  Each will always use 2 digits.
// You can change the order year, month, day appear in using `yearMonthDayOrder`.
// You can change the order hour, minutes, seconds appear in using `hourMinSecOrder`.
// You can use any separator you want.
// `separateEach` give you the option of separating each part, i.e  'yy-mm-dd-hh-mm-ss'.


export function getDateTime(
    yearMonthDayOrder = 'ymd', hourMinSecOrder = 'hms', separator = '-', separateEach = false
): string {

    let date = new Date();

    let year = String(date.getFullYear()).slice(2); // trims off first 2 digits.
    let month = ensureTwoDigits(date.getMonth() + 1);
    let day = ensureTwoDigits(date.getDate());

    let hour = ensureTwoDigits(date.getHours());
    let mins = ensureTwoDigits(date.getMinutes());
    let secs = ensureTwoDigits(date.getSeconds());

    if (separateEach) {
        return ('' + year + separator + month + separator + day + separator +
            hour + separator + mins + separator + secs);
    } else {
        return ('' + year + month + day + separator + hour + mins + secs);
    }


    function ensureTwoDigits(str) {
        if (String(str).length === 1) {
            str = ('0' + str);
        }
        return str;
    }


    function getFormat(order) {

    }

}
