const filterOdd = (arr) => {

    const result = arr.filter(num => num % 2 === 1);
    return result;
};

console.log(filterOdd([1, 2, 4, 27, 5, 6, 10]));
module.exports = filterOdd;
