"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getYearsInSeconds = exports.getWeeksInSeconds = exports.getDaysInSeconds = exports.getHoursInSeconds = exports.getMinutesInSeconds = void 0;
function getMinutesInSeconds(minutes) {
    return minutes * 60;
}
exports.getMinutesInSeconds = getMinutesInSeconds;
function getHoursInSeconds(hours) {
    return getMinutesInSeconds(hours * 60);
}
exports.getHoursInSeconds = getHoursInSeconds;
function getDaysInSeconds(days) {
    return getHoursInSeconds(days * 24);
}
exports.getDaysInSeconds = getDaysInSeconds;
function getWeeksInSeconds(weeks) {
    return getDaysInSeconds(weeks * 7);
}
exports.getWeeksInSeconds = getWeeksInSeconds;
function getYearsInSeconds(years, { isLeapYear } = {}) {
    return getDaysInSeconds(years * (isLeapYear ? 366 : 365));
}
exports.getYearsInSeconds = getYearsInSeconds;
