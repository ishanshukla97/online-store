
if (process.env.NODE_ENV === 'production'){
	export const HTTP_URL = "https://" + process.env.BACKEND_URL + "/admin/graphql";
} else {
	export const HTTP_URL = "http://localhost:5000/admin/graphql";

}