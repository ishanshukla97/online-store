import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../services/products/actions";
import ProductsList from "./ProductsList";
import ProductInfo from "./ProductInfo";
import CreateNewBtn from "./createFAB";
import { withApollo } from "react-apollo";

class Products extends Component {
	state = { productInfo: false };
	isNew = false;

	componentDidMount() {
		if (this.props.auth) {
			console.log("Updated");
			this.props.fetchProducts(this.props.auth, this.props.client);
		}
	}

	async onClickEditSubmit(product) {
		//Submit edited product
		await this.props.updateProduct(
			product,
			this.props.auth,
			this.props.client
		);
		this.setState({ productInfo: false });
		this.props.fetchProducts(this.props.auth, this.props.client);
	}

	async onClickRemove(product) {
		//Delete product
		await this.props.removeProduct(
			product,
			this.props.auth,
			this.props.client
		);
		this.setState({ productInfo: false });
		this.props.fetchProducts(this.props.auth, this.props.client);
	}

	async onClickCreate(product) {
		await this.props.createProduct(
			product,
			this.props.auth,
			this.props.client
		);
		this.setState({ productInfo: false });
		this.props.fetchProducts(this.props.auth, this.props.client);
	}

	renderContent() {
		if (this.state.productInfo) {
			const id = this.state.productInfo;
			return (
				<ProductInfo
					id={id}
					products={this.props.products}
					onCancel={() => this.setState({ productInfo: false })}
					onSubmit={values => {
						if (this.isNew) {
							return this.onClickCreate(values);
						}
						return this.onClickEditSubmit(values);
					}}
					onRemove={values => this.onClickRemove(values)}
				/>
			);
		}

		return (
			<React.Fragment>
				<ProductsList
					products={this.props.products}
					onClick={id => {
						this.setState({ productInfo: id });
						this.isNew = false;
					}}
				/>
				<CreateNewBtn
					onClick={() => {
						this.setState({ productInfo: true });
						this.isNew = true;
					}}
				/>
			</React.Fragment>
		);
	}

	render() {
		return <div className="container">{this.renderContent()}</div>;
	}
}

function mapStateToProps({ products, auth }) {
	return { products, auth };
}

export default withApollo(
	connect(
		mapStateToProps,
		actions
	)(Products)
);
