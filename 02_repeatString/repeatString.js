const repeatString = function(str, nb) {
	
	// Analyse input
	if (nb < 0) {
		return "ERROR";
	} else if (nb === 0 || str === "") {
		return "";
	}

	let substr = "";
	while(nb > 0) {
		substr += str.slice();
		nb--;
	}
	return substr;
};

// Do not edit below this line
module.exports = repeatString;
