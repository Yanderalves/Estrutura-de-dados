function BinarySearch(array, target) {
    let firstIndex = 0;
    let lastIndex = array.length - 1;
    let midIndex = 0;

    while (lastIndex >= firstIndex) {
        midIndex = Math.floor(firstIndex + lastIndex) / 2;
        if (target > array[midIndex]) {
            firstIndex = midIndex - 1;
        } else if (target < array[midIndex]) {
            lastIndex = midIndex + 1;
        } else {
            return true;
        }
    }
    return false;
}

let array = [1, 8, 9, 78, 98];
let target = 78;

console.log(BinarySearch(array, target))