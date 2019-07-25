import React from "react";
import { connect } from "react-redux";
import * as actions from "../../../services/filter/actions";
import { getUnique } from "../../../utils/filter";
import "./index.css";

const Filter = props => {
	const categories = getUnique(props.desk.map(a => a.category));
	const [currentFilter, setCurrentFilter] = React.useState("");

	const onClickFilter = item => {
		setCurrentFilter(item);
		props.setFilter(item);
	};

	React.useEffect(() => {
		setCurrentFilter("");
		props.setFilter("");
	}, [props]);

	const renderCategory = () => {
		return categories.map(item => {
			return (
				<a
					href="#!"
					key={item}
					className={
						"collection-item filter-btn " +
						(currentFilter === item ? "active" : "")
					}
					onClick={() => onClickFilter(item)}
				>
					{item}
				</a>
			);
		});
	};
	return (
		<div>
			<h5 style={{ textAlign: "center" }}>Categories</h5>
			<div className="collection">{renderCategory()}</div>
			<a
				className="btn-floating btn-large red lighten-1"
				style={{ margin: "0 40%" }}
				href="#!"
				onClick={() => onClickFilter("")}
			>
				<i className="material-icons">close</i>
			</a>
		</div>
	);
};

function mapStateToProps({ desk }) {
	return { desk };
}

export default connect(
	mapStateToProps,
	actions
)(Filter);
