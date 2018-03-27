/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
	var max = Math.pow(2, 31) - 1;
	var min = Math.pow(-2, 31) - 1;
	if (x > 0) {
		var stringX = x.toString().split("").reverse()
		if(stringX[0] == 0){
			stringX.shift()
		}
		var stringXXX = parseInt(stringX.join(""))
		if (stringXXX > min && stringXXX < max) {
			console.log(stringXXX)
			return stringXXX
		}else{
			return 0
		}
	} else if(x < 0){
		var stringX = x.toString().split("").reverse()
		stringX.pop()
		var stringXXX = parseInt('-' + stringX.join(""))
		if (stringXXX > min && stringXXX < max) {
			console.log(stringXXX)
			return stringXXX
		}else{
			return 0
		}
	}else{
		return 0
	}
}

reverse(0)