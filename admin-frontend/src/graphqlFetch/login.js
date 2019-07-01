import axios from "axios";

export default function({ username, password }) {
	const res = axios({
		url: "http://localhost:5000/admin/graphql",
		method: "post",
		data: {
			query: `
            query {
                login (adminInput: { username: "${username}", password: "${password}" }) {
                    userId
                    token
                    ExpirationTime
                }
            }	
            `
		}
	});
	return res;
}
