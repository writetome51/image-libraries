export function getDateTime(separator = '-'): string {
    let date = new Date();
    let year: any = date.getFullYear();
    year = String(year).slice(2); // trims off first 2 digits.
    let month = date.getMonth() + 1;
    month = makeSureLengthIsTwo(month);
    let day = date.getDate();
    day = makeSureLengthIsTwo(day);
    let hour = date.getHours();
    hour = makeSureLengthIsTwo(hour);
    let mins = date.getMinutes();
    mins = makeSureLengthIsTwo(mins);
    let secs = date.getSeconds();
    secs = makeSureLengthIsTwo(secs);
    return ('' + year + month + day + separator + hour + mins + secs);


    function makeSureLengthIsTwo(str) {
        if (String(str).length === 1) {
            str = ('0' + str);
        }
        return str;
    }

}
