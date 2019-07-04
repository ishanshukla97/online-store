import React from "react";
import "./index.css";
const Item = props => {
	return (
		<div className="col m4" key={props._id}>
			<div className="card medium">
				<div className="card-image">
					<img src="https://images.unsplash.com/photo-1561363702-e07252da3399?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" />
					<span className="card-title">{props.title}</span>
				</div>
				<div className="card-content">
					<p>{props.description}</p>
				</div>
				<div className="card-action">
					<a href="#!" className="price-text">
						₹ {props.price}
					</a>
					<a
						href="#!"
						className="add-btn btn-floating red waves-effect"
						onClick={() => {
							console.log(props.title);
						}}
					>
						<i className="material-icons">add</i>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Item;
