import { getUnique } from "./filter";

describe("utils", () => {
	it("should return unique items given an array of items", () => {
		const mockItems = [
			"Food",
			"Music",
			"Sport",
			"Music",
			"Computers",
			"Books",
			"Computers",
			"Books",
			"Music",
			"Computers",
			"Books",
			"Music",
			"Computers",
			"Books"
		];
		const result = getUnique(mockItems);
		const correct = ["Food", "Music", "Sport", "Computers", "Books"];
		expect(result).toMatchObject(correct);
	});
});
