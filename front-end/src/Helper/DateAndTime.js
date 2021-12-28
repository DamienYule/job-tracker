export const dateAndTime = (input) => {
    let dateObj = new Date();
    let dayIndex = dateObj.getDay();
    let weekArray = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    let day = weekArray[dayIndex];
    let monthIndex = dateObj.getMonth();
    let monthArray = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    let month = monthArray[monthIndex];
    let date = dateObj.getDate();
    let prefix = "";
    if (date === 1 || date === 21 || date === 31) {
        prefix = "st";
    } else if (date === 2 || date === 22) {
        prefix = "nd";
    } else if (date === 3 || date === 23) {
        prefix = "rd";
    } else {
        prefix = "th";
    }
    let hoursFromObj = dateObj.getHours();
    let hour = "";
    let amPm = "am";
    if (hoursFromObj === 0) {
        hour = "12";
    } else if (hoursFromObj === 12) {
        hour = "12"
        amPm = "pm"
    } else if (hoursFromObj > 12) {
        hour = hoursFromObj - 12
        amPm = "pm"
    } else {
        hour = hoursFromObj
    }
    let minFromObj = dateObj.getMinutes()
    let min = ""
    if (minFromObj === 0) {
        min = "00"
    } else if (minFromObj < 10) {
        min = "0" + minFromObj.toString()
    } else {
        min = minFromObj
    }
    input.date = `${day}, ${month} ${date + prefix} at ${hour}:${min + amPm} EST`
}
