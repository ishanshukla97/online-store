import React from "react";

const Footer = props => {
	return (
		<footer className="page-footer black">
			<div className="container" style={{ textAlign: "center" }}>
				<h5>
					Created with{" "}
					<i className="material-icons" style={{ color: "red" }}>
						favorite
					</i>{" "}
					by Ishan
				</h5>
				<div>
					<a
						href="https://facebook.com/ishanxavi"
						className="btn-floating social facebook blue darken-4"
						style={{ margin: "5px" }}
					>
						<i className="fa fa-facebook" />
					</a>
					<a
						href="https://github.com/ishanshukla97"
						className="btn-floating social github grey darken-4"
						style={{ margin: "5px" }}
					>
						<i className="fa fa-github" />
					</a>
				</div>
			</div>
			<div className="footer-copyright">
				<div className="container">© 2019 Copyright Ishan Shukla</div>
			</div>
		</footer>
	);
};

export default Footer;
