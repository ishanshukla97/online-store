import React from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import "./index.css";

const CheckoutForm = props => {
	return (
		<div className="form-wrapper">
			<div className="form ">
				<form
					onSubmit={props.handleSubmit(values =>
						props.onSubmit(values)
					)}
				>
					<div className="form-header">
						Enter Delivery Address
						<div
							className="close-btn"
							onClick={() => props.onCancel()}
						>
							<i className="material-icons">close</i>
						</div>
					</div>
					<div className="form-content">
						<Field
							type="text"
							name="name"
							label="Full Name"
							component={CheckoutField}
						/>
						<Field
							type="text"
							name="contact"
							label="Mobile no."
							component={CheckoutField}
						/>
						<div className="input-container">
							<label className="label">State</label>
							<input
								className="form-input"
								type="text"
								value="Delhi"
								disabled
							/>
						</div>
						<div className="input-container">
							<label className="label">Locality</label>
							<Field
								name="locality"
								component="select"
								className="form-input-select"
							>
								<option value="None" disabled>
									None
								</option>
								<option value="Area 2">Area 2</option>
								<option value="Area 3">Area 3</option>
								<option value="Area 4">Area 4</option>
							</Field>
						</div>
						<Field
							type="text"
							name="address"
							label="Address"
							component={CheckoutField}
						/>
					</div>
					<div className="form-footer row">
						<div className="form-total-price">
							TOTAL: {props.total}
						</div>
						<button
							type="submit"
							className="btn red form-proceed-btn"
						>
							ORDER NOW
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

const CheckoutField = ({ input, label, type, meta }) => {
	console.log(meta.error == undefined);
	return (
		<div className="input-container">
			<label className="label">{label}</label>
			<input
				className={
					meta.error != undefined
						? "form-input input-warn"
						: "form-input"
				}
				type={type}
				{...input}
			/>
		</div>
	);
};

const mapStateToProps = obj => {
	return obj;
};

const validate = values => {
	const errors = {};
	if (!values.name) {
		errors.name = true;
	}
	if (
		!values.contact ||
		values.contact.length !== 10 ||
		!/^[0-9]*$/.test(values.contact)
	) {
		errors.contact = true;
	}
	if (!values.address) {
		errors.address = true;
	}
	console.log(values);
	if (!values.locality) {
		errors.locality = true;
	}
	return errors;
};

export default reduxForm({
	validate,
	form: "CheckoutForm"
})(
	connect(
		mapStateToProps,
		null
	)(CheckoutForm)
);
