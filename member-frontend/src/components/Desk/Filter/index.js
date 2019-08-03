import React from "react";
import { connect } from "react-redux";
import * as actions from "../../../services/filter/actions";
import { getUnique } from "../../../utils/filter";
import "./index.scss";

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
		return categories.map((item, idx) => {
			return (
				<a
					href="#!"
					key={item}
					className={"filter__btn filter__btn--" + (idx + 1)}
					onClick={() => onClickFilter(item)}
				>
					{item}
				</a>
			);
		});
	};
	return (
		<div className="filter">
			{renderCategory()}
			<a
				className="filter__btn filter__btn--default"
				href="#!"
				onClick={() => onClickFilter("")}
			>
				All
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
