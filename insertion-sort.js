
function insertionSort(array) {
    let n = array.length;
    for (let i = 1; i < n; i++) {
        chave = array[i];
        j = i - 1;
        while (j >= 0 && array[j] > chave) {
            array[j + 1] = array[j];
            j = j - 1;
        }
        array[j + 1] = chave
    }
    return array;
}


let array = [98, 7, 978, 2];
// [7, 98, 978, 2] ->>  [7, 98, 978, 978] ->>  [7, 98, 98, 978] ->> [7, 7, 98, 978] ->> 





console.log(insertionSort(array))