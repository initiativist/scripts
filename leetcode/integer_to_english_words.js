/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function (num) {
	if (num === 0) {
		return "Zero";
	}
	const magnitudeMap = {
		Trillion: 1000000000000,
		Billion: 1000000000,
		Million: 1000000,
		Thousand: 1000,
	};
	const tensMap = {
		9: "Ninety",
		8: "Eighty",
		7: "Seventy",
		6: "Sixty",
		5: "Fifty",
		4: "Forty",
		3: "Thirty",
		2: "Twenty",
	};
	const onesMap = {
		19: "Nineteen",
		18: "Eighteen",
		17: "Seventeen",
		16: "Sixteen",
		15: "Fifteen",
		14: "Fourteen",
		13: "Thirteen",
		12: "Twelve",
		11: "Eleven",
		10: "Ten",
		9: "Nine",
		8: "Eight",
		7: "Seven",
		6: "Six",
		5: "Five",
		4: "Four",
		3: "Three",
		2: "Two",
		1: "One",
	};
	let englishNumber = "";
	let numberAtMagnitude = 0;
	for (var magnitudeName in magnitudeMap) {
		if (num < magnitudeMap[magnitudeName]) {
			continue;
		}

		numberAtMagnitude = ~~(num / magnitudeMap[magnitudeName]);
		num = num % (numberAtMagnitude * magnitudeMap[magnitudeName]);

		if (numberAtMagnitude >= 100) {
			englishNumber += onesMap[~~(numberAtMagnitude / 100)] + " Hundred ";
			numberAtMagnitude = numberAtMagnitude % 100;
		}
		if (numberAtMagnitude >= 20) {
			englishNumber += tensMap[~~(numberAtMagnitude / 10)] + " ";
			numberAtMagnitude = numberAtMagnitude % 10;
		}
		if (numberAtMagnitude >= 1) {
			englishNumber += onesMap[numberAtMagnitude] + " ";
		}
		englishNumber += magnitudeName + " ";
	}
	if (num >= 100) {
		digit = onesMap[~~(num / 100)];
		num = num % 100;
		englishNumber += digit + " Hundred ";
	}
	if (num >= 20) {
		digit = tensMap[~~(num / 10)];
		num = num % 10;
		englishNumber += digit + " ";
	}
	if (num >= 1) {
		digit = onesMap[num];
		englishNumber += digit + " ";
	}
	englishNumber = englishNumber.trimEnd();
	return englishNumber;
};

console.log(numberToWords(2147483647));
