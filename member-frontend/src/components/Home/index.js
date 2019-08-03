import React from "react";
import "./index.scss";

const Home = () => {
	return (
		<React.Fragment>
			<section className="banner">
				<div className="heading-primary">
					<h1
						className="heading-primary--main heading-primary--animated"
						style={{ animationDelay: "2s" }}
					>
						Always Ahead
					</h1>
					<h1
						className="heading-primary--main heading-primary--animated"
						style={{ animationDelay: "7s" }}
					>
						Always in style
					</h1>
					<h1
						className="heading-primary--main heading-primary--animated"
						style={{ animationDelay: "12s" }}
					>
						All eyes on you
					</h1>
					<button className="btn">Shop now</button>
				</div>
			</section>
			<section className="features">
				<div className="features__box features__box--1">
					<i className="material-icons u-font-size-medium">
						airport_shuttle
					</i>
					<h3 className="heading-tertiary u-margin-bottom-medium">
						2-Day delivery
					</h3>
					<p>
						Sed ut perspiciatis unde omnis iste natus error sit
						voluptatem accusantium doloremque laudantium, totam rem
						aperiam, eaque ipsa quae ab illo inventore veritatis et
						quasi architecto beatae vitae dicta sunt explicabo.
					</p>
				</div>
				<div className="features__box features__box--2">
					<i className="material-icons u-font-size-medium">
						enhanced_encryption
					</i>
					<h3 className="heading-tertiary u-margin-bottom-medium">
						safe transactions
					</h3>
					<p>
						Sed ut perspiciatis unde omnis iste natus error sit
						voluptatem accusantium doloremque laudantium, totam rem
						aperiam, eaque ipsa quae ab illo inventore veritatis et
						quasi architecto beatae vitae dicta sunt explicabo.
					</p>
				</div>
				<div className="features__box features__box--3">
					<i className="material-icons u-font-size-medium">
						sentiment_very_satisfied
					</i>
					<h3 className="heading-tertiary u-margin-bottom-medium">
						satisfaction
					</h3>
					<p className="paragraph">
						Sed ut perspiciatis unde omnis iste natus error sit
						voluptatem accusantium doloremque laudantium, totam rem
						aperiam, eaque ipsa quae ab illo inventore veritatis et
						quasi architecto beatae vitae dicta sunt explicabo.
					</p>
				</div>
			</section>
			<section className="shop-categories">
				<div className="shop-categories__content">
					<h2 className="heading-secondary u-margin-bottom-big">
						Shop by categories
					</h2>
					<div className="shop-categories__box">
						<img
							src="cat-1.jpg"
							className="shop-categories__box__img"
						/>
						<figcaption className="shop-categories__box__caption">
							Browse Sunglasses
						</figcaption>
					</div>
					<div className="shop-categories__box">
						<img
							src="cat-2.jpg"
							className="shop-categories__box__img"
						/>
						<figcaption className="shop-categories__box__caption">
							Browse Shirts
						</figcaption>
					</div>
					<div className="shop-categories__box">
						<img
							src="cat-3.jpg"
							className="shop-categories__box__img"
						/>
						<figcaption className="shop-categories__box__caption">
							Browse Purse
						</figcaption>
					</div>
					<div className="shop-categories__box">
						<img
							src="cat-4.jpg"
							className="shop-categories__box__img"
						/>
						<figcaption className="shop-categories__box__caption">
							Browse Shoes
						</figcaption>
					</div>
					<div className="shop-categories__box">
						<img
							src="cat-5.jpg"
							className="shop-categories__box__img"
						/>
						<figcaption className="shop-categories__box__caption">
							Browse Jeans
						</figcaption>
					</div>
					<div className="shop-categories__box">
						<img
							src="cat-6.jpg"
							className="shop-categories__box__img"
						/>
						<figcaption className="shop-categories__box__caption">
							Browse Hats
						</figcaption>
					</div>
				</div>
			</section>
		</React.Fragment>
	);
};

export default Home;
