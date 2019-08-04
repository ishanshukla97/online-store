
if (process.env.NODE_ENV === 'production'){
	export const HTTP_URL = "https://" + process.env.BACKEND_URL + "/admin/graphql";
	export const WS_URL = "ws://" + process.env.BACKEND_URL + "localhost:5000/graphql";
} else {
	export const HTTP_URL = "http://localhost:5000/admin/graphql";
	export const WS_URL = "ws://localhost:5000/graphql";

}
export const ORDER_STATUS = {
	CANCELED: "CANCELED",
	PENDING: "PENDING",
	CONFIRMED: "CONFIRMED",
	DELIVERED: "DELIVERED"
};
