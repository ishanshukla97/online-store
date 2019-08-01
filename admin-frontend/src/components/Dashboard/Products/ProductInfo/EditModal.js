import React from "react";
import { reduxForm, Field } from "redux-form";
import "./style.scss";

const ProductEdit = props => {
	const itemKeys = Object.keys(props.item);
	let isNew;
	const renderSubmit = () => {
		if (props.item._id) {
			isNew = false;
			return (
				<button
					type="submit"
					className="btn product-form__action--update"
				>
					Update
				</button>
			);
		}
		isNew = true;
		return (
			<button type="submit" className="btn product-form__action--create">
				Create
			</button>
		);
	};

	const renderForm = () => {
		return (
			<div className="product-form">
				<form
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
					<div className="product-form__action">
						<button
							className="btn product-form__action--cancel"
							onClick={() => props.onCancel()}
						>
							Cancel
						</button>
						{renderSubmit()}
						<button
							className="btn product-form__action--delete"
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

const ModalField = props => {
	const { input, label, type, meta } = props;

	const isId = label === "_ID" ? true : false;
	return (
		<div className="product-form__input">
			<label>{label}</label>
			<input type={type} {...input} disabled={isId} />
			<div className="red-text">{meta.touched ? meta.error : ""}</div>
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
