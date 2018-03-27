function twoNum(nums, target) {
	var resultData = [], resultList = [];
	for (i = 0, len = nums.length; i < len; i++) {
		var result = target - nums[i]
		if (!resultList.includes(result)) {
			resultList.push(nums[i])
		} else {
			resultData.push(nums.indexOf(result))
			resultData.push(i)
		}
	}
	console.log(resultData)
	return resultData
}

var nums = [3, 2, 4], target = 6
// var nums = [2, 7, 11, 15], target = 9
twoNum(nums, target)