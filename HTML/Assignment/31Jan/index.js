var twoSum = function (nums, target) {
    let PAIRS = {};
    for (let i = 0; i < nums.length; i++) {
      const el = nums[i];
      if (!Object.hasOwnProperty.call(PAIRS, [target - el])) {
        PAIRS[el] = i;
        
      } else {
        return [PAIRS[target - nums[i]], i];
      }
    }
  };
  var nums = [2,7,11,15,14,5,9,6];
  var target = 19;
  twoSum(nums,target);