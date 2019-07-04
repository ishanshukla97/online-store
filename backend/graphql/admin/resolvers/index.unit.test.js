const axios = require("axios");
let testId = "";

const token =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InlvdW5nX29jZWFuXzE5OTciLCJpYXQiOjE1NjE0OTMxMTksImV4cCI6MTU2NTA5MzExOX0.zrQKvnHmVPhq6Q-vJykRc2PjuK9eU65e8Urv7q6GbEc";

describe("admin resolvers", () => {
	test("login", async () => {
		const response = await axios.post(
			"http://localhost:5000/admin/graphql",
			{
				query: `
                query {
                    login (adminInput: { username: "young_ocean_1997", password: "blackcat2" }) {
                    userId
                    ExpirationTime
                    }
                }
                `
			}
		);

		const { data } = response;

		expect(data).toMatchObject({
			data: {
				login: {
					userId: "5d125676be14092f5e7138e8",
					ExpirationTime: 1000
				}
			}
		});
	});

	test("createProduct", async () => {
		const response = await axios.post(
			"http://localhost:5000/admin/graphql",
			{
				query: `
                mutation {
                    createProduct(productInput: { img: "img.jpg", title: "Watch", category: "Fashion", description: "Smart watch with heart beat sensor", price: 99.9 }){
					  _id
					  img
					  title
					  category
                      description
                      price
                    }
                  }
                `
			},
			{
				headers: {
					Authorization: "Bearer " + token
				}
			}
		);

		const { data } = response;
		testId = data.data.createProduct._id;
		expect(data).toMatchObject({
			data: {
				createProduct: {
					_id: testId,
					img: "img.jpg",
					title: "Watch",
					category: "Fashion",
					description: "Smart watch with heart beat sensor",
					price: 99.9
				}
			}
		});
	});

	test("updateProduct", async () => {
		const response = await axios.post(
			"http://localhost:5000/admin/graphql",
			{
				query: `
                mutation {
                    updateProduct(productInput: {img: "new.jpg", title: "2nd gen smart watch", category: "Fashion", description: "next gen smartwatch with many features", price: 199.9 }, productId: "${testId}") {
                      _id
                      img
					  title
					  category
                      description
                      price
                    }
                  }
                `
			},
			{
				headers: {
					Authorization: "Bearer " + token
				}
			}
		);

		const { data } = response;
		expect(data).toMatchObject({
			data: {
				updateProduct: {
					_id: testId,
					img: "new.jpg",
					title: "2nd gen smart watch",
					category: "Fashion",
					description: "next gen smartwatch with many features",
					price: 199.9
				}
			}
		});
	});

	test("deleteProduct", async () => {
		const response = await axios.post(
			"http://localhost:5000/admin/graphql",
			{
				query: `
                mutation {
                    deleteProduct(, productId: "${testId}") {
                      _id
                      img
					  title
					  category
                      description
                      price
                    }
                  }
                `
			},
			{
				headers: {
					Authorization: "Bearer " + token
				}
			}
		);

		const { data } = response;
		expect(data).toMatchObject({
			data: {
				deleteProduct: {
					_id: testId,
					img: "new.jpg",
					title: "2nd gen smart watch",
					category: "Fashion",
					description: "next gen smartwatch with many features",
					price: 199.9
				}
			}
		});
	});
});
