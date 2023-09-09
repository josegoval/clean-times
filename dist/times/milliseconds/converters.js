"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getYearsInMs = exports.getWeeksInMs = exports.getDaysInMs = exports.getHoursInMs = exports.getMinutesInMs = exports.getSecondsInMs = void 0;
function getSecondsInMs(seconds) {
    return seconds * 1000;
}
exports.getSecondsInMs = getSecondsInMs;
function getMinutesInMs(minutes) {
    return getSecondsInMs(minutes * 60);
}
exports.getMinutesInMs = getMinutesInMs;
function getHoursInMs(hours) {
    return getMinutesInMs(hours * 60);
}
exports.getHoursInMs = getHoursInMs;
function getDaysInMs(days) {
    return getHoursInMs(days * 24);
}
exports.getDaysInMs = getDaysInMs;
function getWeeksInMs(weeks) {
    return getDaysInMs(weeks * 7);
}
exports.getWeeksInMs = getWeeksInMs;
function getYearsInMs(years, { isLeapYear } = {}) {
    return getDaysInMs(years * (isLeapYear ? 366 : 365));
}
exports.getYearsInMs = getYearsInMs;
