import React from "react";
import { reduxForm, Field } from "redux-form";

const ProductEdit = props => {
	const itemKeys = Object.keys(props.item);
	let isNew;
	const renderSubmit = () => {
		if (props.item._id) {
			isNew = false;
			return (
				<button
					type="submit"
					className="btn-flat teal right"
					style={{ marginLeft: "10px" }}
				>
					Update
				</button>
			);
		}
		isNew = true;
		return (
			<button
				type="submit"
				className="btn-flat teal right"
				style={{ marginLeft: "10px" }}
			>
				Create
			</button>
		);
	};

	const renderForm = () => {
		return (
			<div
				className="container card"
				style={{ position: "fixed", width: "60%", marginLeft: "10%" }}
			>
				<form
					className="card-content"
					onSubmit={props.handleSubmit(values =>
						props.onSubmit(values)
					)}
				>
					{itemKeys.map(key => {
						return (
							<Field
								key={key}
								type="text"
								name={key}
								label={key.toUpperCase()}
								component={ModalField}
							/>
						);
					})}
					<div
						className="card-action"
						style={{ marginBottom: "30px" }}
					>
						<button
							className="btn-flat red lighten-2 left"
							onClick={() => props.onCancel()}
						>
							Cancel
						</button>
						{renderSubmit()}
						<button
							className="btn-flat red darken-2 right"
							onClick={() => props.onRemove(props.item)}
							disabled={isNew}
						>
							Delete
						</button>
					</div>
				</form>
			</div>
		);
	};

	return renderForm();
};

const ModalField = ({ input, label, type, meta }) => {
	const isId = label === "_ID" ? true : false;
	return (
		<div>
			<label>{label}</label>
			<input
				type={type}
				{...input}
				style={{ marginBottom: "5px" }}
				disabled={isId}
			/>
			<div className="red-text" style={{ marginBottom: "5	px" }}>
				{meta.touched ? meta.error : ""}
			</div>
		</div>
	);
};

function validate(values) {
	const errors = {};

	//Implement form validation
	if (!values.title) {
		errors.title = "Title cannot be empty";
	}
	if (!values.description) {
		errors.description = "Description cannot be empty";
	}
	if (!values.price) {
		errors.price = "Price cannot be empty";
	}

	if (values.price && /[a-zA-Z]/.test(values.price)) {
		errors.price = "Price must not contain any alphabet";
	}
	if (!values.img) {
		errors.img = "You must specify image name";
	}
	return errors;
}

export default reduxForm({ validate, form: "editProductForm" })(ProductEdit);
