export default password => {
	if (!password) {
		return "You must provide password";
	} else if (password.length < 6) {
		return "Password must be atleast 6 characters";
	}
	return;
};
