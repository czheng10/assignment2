const fibonacciNums = (n) => {
    if (n < 1) return [];
    const fib = [0,1];
    for(let i = 2; i< n; i++){
	fib.push(fib[i-2] + fib[i-1]);
    }
    return fib;
};

console.log(fibonacciNums(5));
module.exports = fibonacciNums;
