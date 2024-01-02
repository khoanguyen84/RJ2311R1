/*
    1. nó phải là 1 hàm
    2. nó phải được truyền vào 1 hàm khác, thông qua agrument (agrument, parameter)
    3. nó phải được thực thi
 */


// function callback(number_1, number_2) {
//     console.log(number_1 + number_2);
// }

// function useCallback(params) {
//     params(10, 20)
// }

// useCallback(callback)



// function useCallback(params) {
//     params(100, 200)
// }

// useCallback(function (number_1, number_2) {
//     console.log(number_1 + number_2);
// })

// callback(1, 2)
//anonymous function (hàm vô danh)

let nunbers = [20, 23, 45, 34]

let result = nunbers.reduce(function process(prevValue, currentValue) {
    return prevValue + currentValue
}, 0)

console.log(result);