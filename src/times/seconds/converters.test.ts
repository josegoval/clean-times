import { getDaysInSeconds, getYearsInSeconds } from "./converters";

describe("Converters module", () => {
	it("converts leap years", ()=> {
		expect(getYearsInSeconds(3, { isLeapYear: true })).toBe(getDaysInSeconds(366) * 3);
	});

});