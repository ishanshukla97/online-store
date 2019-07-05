export const addItem = (list, item) => {
	const newList = list;

	for (var i = 0; i < list.length; i++) {
		if (newList[i]._id == item._id) {
			newList[i].qty++;
			return newList;
		}
	}

	newList.push({ ...item, qty: 1 });

	return newList;
};

export const removeItem = (list, item) => {
	const newList = [];
	for (var i = 0; i < list.length; i++) {
		if (list[i]._id == item._id) {
			if (list[i].qty > 1) {
				newList.push({ ...item, qty: --list[i].qty });
			}
		} else {
			newList.push(list[i]);
		}
	}

	return newList;
};
