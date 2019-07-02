import React from "react";
import renderer from "react-test-renderer";
import ProductInfo from "./index";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import reducers from "../../../../reducers";

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

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

const productEditInfo = renderer.create(
	<Provider store={store}>
		<ProductInfo products={mockItemList} id={0} />
	</Provider>
);
const productNewInfo = renderer.create(
	<Provider store={store}>
		<ProductInfo products={mockItemList} id={false} />
	</Provider>
);

describe("Product Info", () => {
	it("renders edit product form", () => {
		expect(productEditInfo).toMatchSnapshot();
	});
	it("renders new product form", () => {
		expect(productNewInfo).toMatchSnapshot();
	});
});
