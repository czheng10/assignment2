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

    let ans = "{" + "\n";
    for(let j = 0; j < num.length; j++){
	if (j === num.length-1){
	    ans+= num[j] + ": " + freq[j]  + "\n";
	}
	else {
	    ans+= num[j] + ": " + freq[j]  + ",\n" ;
	}
    }
    ans += "}";
    return ans;
}


console.log(getFrequencies([1, 1, 5, 2, 2]));
module.exports = getFrequencies;
