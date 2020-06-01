const middle = function(arr) {
    let newArr = [];

    if (arr.length < 3) {
        return newArr;
    }

    if (arr.length % 2 !== 0) {
        let mid = Math.floor(arr.length / 2);
        newArr.push(arr[mid]);
    } else {
        let mid1 = Math.floor((arr.length - 1) / 2);
        let mid2 = Math.floor(arr.length / 2);
        newArr.push(arr[mid1]);
        newArr.push(arr[mid2]);
    }

    return newArr;
}

module.exports = middle;
