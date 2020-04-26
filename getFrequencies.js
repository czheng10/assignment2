const getFrequencies = (arr) => {
    let num = [], freq = [], prev;
    
    arr.sort();
    for ( var i = 0; i < arr.length; i++ ) {
        if ( arr[i] !== prev ) {
            num.push(arr[i]);
            freq.push(1);
        } else {
            freq[freq.length-1]++;
        }
        prev = arr[i];
    }

    let ans = "";
    for(let j = 0; j < num.length; j++){
	ans+= num[j] + ": " + freq[j]  + "\n";
    }
    return ans;
}


console.log(getFrequencies([1, 3, 2, 3, 1, 1, 5]));
module.exports = getFrequencies;
