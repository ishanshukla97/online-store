import React from "react";
import EditModal from "./EditModal";

const ProductInfo = props => {
	let product = props.products.filter(product => product._id === props.id)[0];

	if (!product || product === {}) {
		let newProduct = Object.assign({}, props.products[1]);

		Object.keys(newProduct).forEach(k => (newProduct[k] = ""));

		return (
			<EditModal
				item={newProduct}
				initialValues={{ ...newProduct }}
				onCancel={() => props.onCancel()}
				onSubmit={values => props.onSubmit(values)}
				onRemove={values => props.onRemove(values)}
			/>
		);
	}

	return (
		<EditModal
			item={product}
			initialValues={{ ...product }}
			onCancel={() => props.onCancel()}
			onSubmit={values => props.onSubmit(values)}
			onRemove={values => props.onRemove(values)}
		/>
	);
};

export default ProductInfo;
