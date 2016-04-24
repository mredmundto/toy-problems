var twoSum = function(nums, target) {
    // store in object (linear)
    // use constant time to look up if target - current value exists in object
    var numObj = {};
    var complement = 0;
    
    for (var i = 0; i < nums.length; i++) {
        // store with number as key and index as value for lookup
        if (numObj[nums[i]] === undefined) {
            numObj[nums[i]] = i;
        } else {
            var existingVal = numObj[nums[i]];
            var bucket = [existingVal, i];  
            numObj[nums[i]] = bucket;
        }
    }
    for (var ind in numObj) {
        complement = target - ind;
        if (numObj[complement]) {
            // for numbers
            if (typeof numObj[complement] === 'number') {
                if (numObj[complement] > numObj[ind]) {
                    return [numObj[ind], numObj[complement]];
                } else if (numObj[ind] > numObj[complement]) {
                    return [numObj[complement], numObj[ind]];
                }              
            } else if (numObj[complement] instanceof Array) {
                if (complement == ind) {
                    return numObj[complement];
                }
            }   
        }
    }
    return null;
};