module.exports = function towelSort (matrix) {
	if (!matrix) {
		return [];
	}
	let arr = [];
	matrix.forEach((element, index) => {
		const sorter = index % 2 ? ((a, b) => b - a ) : ((a, b) => a - b);
		element.sort(sorter);
		element.forEach(e => {
			arr.push(e);
		});
	});
	return arr;
}
