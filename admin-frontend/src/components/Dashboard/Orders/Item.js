import React from "react";
import { connect } from "react-redux";
import { ORDER_STATUS } from "../../../utils/constants";
import "./style.scss";

const Item = props => {
	const productDetails = () => {
		return props.products.map(product => {
			return (
				<div key={product._id}>
					<span>{product.name}</span>
					<span> &nbsp;x{product.quantity}</span>
				</div>
			);
		});
	};

	const setStatus = status => {
		props.setStatus({
			orderId: props._id,
			status
		});
	};

	const orderActions = () => {
		switch (props.status) {
			case "PENDING":
				//render confirm and cancel btn
				return (
					<div>
						<button
							className="btn confirmed"
							onClick={() => setStatus(ORDER_STATUS.CONFIRMED)}
						>
							CONFIRM
						</button>
						<button
							className="btn cancel"
							onClick={() => setStatus(ORDER_STATUS.CANCELED)}
						>
							CANCEL
						</button>
					</div>
				);

			case "CONFIRMED":
				//render delivered btn
				return (
					<div>
						<button
							className="btn delivered"
							onClick={() => setStatus(ORDER_STATUS.DELIVERED)}
						>
							DELIVERED
						</button>
						<button
							className="btn cancel"
							onClick={() => setStatus(ORDER_STATUS.CANCELED)}
						>
							CANCEL
						</button>
					</div>
				);
			default:
				return;
		}
	};

	return (
		<tr>
			<td>{props.creator.name}</td>
			<td>{props.creator.contact}</td>
			<td>{props.creator.address}</td>
			<td>{props.total}</td>
			<td>{productDetails()}</td>
			<th>{props.status}</th>
			<td>{orderActions()}</td>
		</tr>
	);
};

const mapStateToProps = ({ products }) => {
	return { allProducts: products };
};

export default connect(mapStateToProps)(Item);
