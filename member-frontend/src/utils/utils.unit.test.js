import { getUnique } from "./filter";
import { addItem, removeItem } from "./cart";

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

	it("should return item added to list with count", () => {
		const mockItem = { _id: "1", title: "Clock", price: "20.99" };
		const mockList = [
			{
				_id: "2",
				title: "Watch",
				price: "199",
				qty: 1
			},
			{
				_id: "3",
				title: "Football",
				price: "50",
				qty: 1
			}
		];
		let correct = [
			{
				_id: "2",
				title: "Watch",
				price: "199",
				qty: 1
			},
			{
				_id: "3",
				title: "Football",
				price: "50",
				qty: 1
			},
			{
				_id: "1",
				title: "Clock",
				price: "20.99",
				qty: 1
			}
		];
		const result = addItem(mockList, mockItem);
		expect(result).toMatchObject(correct);
	});

	it("should increase count of item in list given item", () => {
		const mockItem = { _id: "1", title: "Clock", price: "20.99" };
		const mockList = [
			{
				_id: "2",
				title: "Watch",
				price: "199",
				qty: 1
			},
			{
				_id: "3",
				title: "Football",
				price: "50",
				qty: 1
			},
			{
				_id: "1",
				title: "Clock",
				price: "20.99",
				qty: 1
			}
		];
		let correct = [
			{
				_id: "2",
				title: "Watch",
				price: "199",
				qty: 1
			},
			{
				_id: "3",
				title: "Football",
				price: "50",
				qty: 1
			},
			{
				_id: "1",
				title: "Clock",
				price: "20.99",
				qty: 2
			}
		];
		const result = addItem(mockList, mockItem);
		expect(result).toMatchObject(correct);
	});

	it("should remove item from list given item", () => {
		const mockItem = { _id: "1", title: "Clock", price: "20.99" };
		const mockList = [
			{
				_id: "2",
				title: "Watch",
				price: "199",
				qty: 1
			},
			{
				_id: "3",
				title: "Football",
				price: "50",
				qty: 1
			},
			{
				_id: "1",
				title: "Clock",
				price: "20.99",
				qty: 1
			}
		];
		let correct = [
			{
				_id: "2",
				title: "Watch",
				price: "199",
				qty: 1
			},
			{
				_id: "3",
				title: "Football",
				price: "50",
				qty: 1
			}
		];
		const result = removeItem(mockList, mockItem);
		expect(result).toMatchObject(correct);
	});

	it("should decrease item qty from list given item", () => {
		const mockItem = { _id: "1", title: "Clock", price: "20.99" };
		const mockList = [
			{
				_id: "2",
				title: "Watch",
				price: "199",
				qty: 1
			},
			{
				_id: "3",
				title: "Football",
				price: "50",
				qty: 1
			},
			{
				_id: "1",
				title: "Clock",
				price: "20.99",
				qty: 4
			}
		];
		let correct = [
			{
				_id: "2",
				title: "Watch",
				price: "199",
				qty: 1
			},
			{
				_id: "3",
				title: "Football",
				price: "50",
				qty: 1
			},
			{
				_id: "1",
				title: "Clock",
				price: "20.99",
				qty: 3
			}
		];
		const result = removeItem(mockList, mockItem);
		expect(result).toMatchObject(correct);
	});
});
