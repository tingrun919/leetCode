/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
	var max = Math.pow(2, 31) - 1;
	var min = Math.pow(-2, 31) - 1;
	var stringX = x.toString().split("").reverse()
	if (x > 0) {
		if (stringX[0] == 0) {
			stringX.shift()
		}
		var stringXXX = parseInt(stringX.join(""))
		if (stringXXX > min && stringXXX < max) {
			return stringXXX
		} else {
			return 0
		}
	} else if (x < 0) {
		stringX.pop()
		var stringXXX = parseInt('-' + stringX.join(""))
		if (stringXXX > min && stringXXX < max) {
			return stringXXX
		} else {
			return 0
		}
	} else {
		return 0
	}
}

reverse(0)