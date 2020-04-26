const isRightTriangle = (a, b, c) => {
    return ((Math.pow(a, 2) + Math.pow(b,2) === Math.pow(c,2))
	    || (Math.pow(c, 2) + Math.pow(b,2) === Math.pow(a,2))
	    || (Math.pow(a, 2) + Math.pow(c,2) === Math.pow(b,2))
	   )    
};

console.log(isRightTriangle(4,3,5));
module.exports = isRightTriangle;
