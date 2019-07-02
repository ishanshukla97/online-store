import React from "react";
import renderer from "react-test-renderer";
import Item from "./Item";
import ProductsList from "./index";

const mockItemList = [
	{
		_id: 0,
		title: "Watch"
	},
	{
		_id: 1,
		title: "Clock"
	}
];

const item = renderer.create(
	<Item item={mockItemList[0]} onClick={() => {}} />
);
const productList = renderer.create(<ProductsList products={mockItemList} />);

describe("Products list", () => {
	it("item renders correctly", () => {
		expect(item).toMatchSnapshot();
	});

	it("list renders correctly", () => {
		expect(productList).toMatchSnapshot();
	});
});
