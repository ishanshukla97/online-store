import axios from "axios";

export const getProducts = ({ token }) => {
	try {
		const res = axios({
			url: "http://localhost:5000/admin/graphql",
			method: "post",
			data: {
				query: `
            query {
                products {
                    _id
                    title
                    description
                    price
					img
					category
                }
            }	
            `
			}
		});
		return res;
	} catch (err) {
		throw err;
	}
};

export const create = (
	{ img, title, description, price, category },
	{ token }
) => {
	try {
		const res = axios({
			url: "http://localhost:5000/admin/graphql",
			method: "post",
			headers: { Authorization: "Bearer " + token },
			data: {
				query: `
          mutation {
            createProduct(productInput: { img: "${img}", title: "${title}", category: "${category}", description: "${description}", price: ${price} }){
              _id
              img
              title
			  description
			  category
              price
            }
          }
            `
			}
		});
		return res;
	} catch (err) {
		throw err;
	}
};

export const update = (
	{ img, title, description, price, _id, category },
	{ token }
) => {
	try {
		const res = axios({
			url: "http://localhost:5000/admin/graphql",
			method: "post",
			headers: { Authorization: "Bearer " + token },
			data: {
				query: `
            mutation {
                updateProduct(productInput: {img: "${img}", title: "${title}", description: "${description}", category: "${category}", price: ${price} }, productId: "${_id}") {
                  _id
                  img
                  title
				  description
				  category
                  price
                }
              }
            `
			}
		});
		return res;
	} catch (err) {
		throw err;
	}
};

export const remove = ({ _id }, { token }) => {
	try {
		const res = axios({
			url: "http://localhost:5000/admin/graphql",
			method: "post",
			headers: { Authorization: "Bearer " + token },
			data: {
				query: `
            mutation {
                deleteProduct(productId: "${_id}") {
                  _id
                  img
                  title
                  description
                  price
                }
              }
            `
			}
		});
		return res;
	} catch (err) {
		throw err;
	}
};
