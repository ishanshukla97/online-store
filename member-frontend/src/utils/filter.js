export const getUnique = list => {
	const uniques = [];
	list.forEach(element => {
		if (!uniques[element]) uniques[element] = true;
	});
	return Object.keys(uniques);
};
