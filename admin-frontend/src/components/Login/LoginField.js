import React from "react";

export default ({ input, label, type, meta }) => {
	return (
		<div>
			<label className="login-form__label">{label}</label>
			<input type={type} {...input} style={{ marginBottom: "5px" }} />
			<div className="red-text" style={{ marginBottom: "20px" }}>
				{meta.touched ? meta.error : ""}
			</div>
		</div>
	);
};
