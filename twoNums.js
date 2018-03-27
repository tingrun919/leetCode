function twoNum(nums, target) {
	var resultData = []
	for (var i = 0; i < nums.length; i++) {
		var result = target - nums[i]
		if (nums.includes(result)) {
			resultData.push(i)
		}
	}
	console.log(resultData)
	return resultData
}

var nums = [2, 7, 11, 15], target = 9
twoNum(nums, target)