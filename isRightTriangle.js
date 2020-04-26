const isRightTriangle = (a, b, c) => {
    if (a+b<=c || b+c <=a || a+c <=b) return false;
    return ((Math.pow(a, 2) + Math.pow(b,2) === Math.pow(c,2))
	    || (Math.pow(c, 2) + Math.pow(b,2) === Math.pow(a,2))
	    || (Math.pow(a, 2) + Math.pow(c,2) === Math.pow(b,2))
	   )    
};

console.log(isRightTriangle(0,0,0));
module.exports = isRightTriangle;
