import { GetYearsInSecondsOptions } from "./types";

export function getMinutesInSeconds (minutes: number) {
	return minutes * 60;
}

export function getHoursInSeconds (hours: number) {
	return getMinutesInSeconds(hours * 60);
}

export function getDaysInSeconds (days: number) {
	return getHoursInSeconds(days * 24);
}

export function getWeeksInSeconds (weeks: number) {
	return getDaysInSeconds(weeks * 7);
}

export function getYearsInSeconds (years: number, { isLeapYear }: GetYearsInSecondsOptions = {}) {
	return getDaysInSeconds(years * (isLeapYear ? 366 : 365));
}
