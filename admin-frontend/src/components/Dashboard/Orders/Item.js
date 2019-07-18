import React from "react";
import { connect } from "react-redux";
import { ORDER_STATUS } from "../../../utils/constants";
import "./index.css";

const Item = props => {
	const [isOpen, setIsOpen] = React.useState(false);
	console.log(props);

	const productDetails = () => {
		return props.products.map(product => {
			return (
				<div key={product._id}>
					<span style={{ paddingRight: "3px" }}>{product.name}</span>
					<span style={{ fontWeight: "600" }}>
						QTY: x{product.quantity}
					</span>
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
						<div
							className="btn-small confirmed"
							onClick={() => setStatus(ORDER_STATUS.CONFIRMED)}
						>
							CONFIRM
						</div>
						<div
							className="btn-small cancel"
							onClick={() => setStatus(ORDER_STATUS.CANCELED)}
						>
							CANCEL
						</div>
					</div>
				);

			case "CONFIRMED":
				//render delivered btn
				return (
					<div>
						<div
							className="btn-small delivered"
							onClick={() => setStatus(ORDER_STATUS.DELIVERED)}
						>
							DELIVERED
						</div>
						<div
							className="btn-small cancel"
							onClick={() => setStatus(ORDER_STATUS.CANCELED)}
						>
							CANCEL
						</div>
					</div>
				);
			default:
				return;
		}
	};

	return (
		<li className="expandable-item-wrapper">
			<div
				className={"expandable-header " + props.status.toLowerCase()}
				onClick={() => setIsOpen(!isOpen)}
			>
				<div className="subsection-left">{props.creator.name}</div>
				<div className="subsection-center">{props.creator.contact}</div>
				<div className="subsection-right">{props.total}</div>
			</div>
			{isOpen ? (
				<div
					className={"expandable-body " + props.status.toLowerCase()}
				>
					<div className="subsection-left-body">
						{productDetails()}
					</div>
					<div className="subsection-center-body">
						{props.creator.address}
					</div>
					<div className="subsection-right-body">
						{orderActions()}
					</div>
				</div>
			) : (
				<div />
			)}
		</li>
	);
};

const mapStateToProps = ({ products }) => {
	return { allProducts: products };
};

export default connect(mapStateToProps)(Item);
