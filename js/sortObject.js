function sortObject(object = {}) {
	if (object instanceof Array) {
		const sortedArray = [];
		const items = object.sort();
		for (let item of items) {
			sortedArray.push(sortObject(item));
		}
		return sortedArray;
	} else if (typeof object === "object") {
		const sortedObject = {};
		let keys = Object.keys(object).sort();
		for (let key of keys) {
			sortedObject[key] = sortObject(object[key]);
		}
		return sortedObject;
	} else {
		return object;
	}
}

module.exports = sortObject