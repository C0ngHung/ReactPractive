// * Destructurin là phân rã. sử dụng với object và array
// * Ví dụ với array:
var array = ['JavaScript', 'Java', 'Golang'];
// * Cách 1: Truy cập từng phần tử
var a = array[0];
var b = array[1];
var c = array[2];
// * Cách 2: Sử dụng destructuring
var [x, y, z] = array; // * Khi dùng với array thì dùng ngoặc vuông []
console.log(x, y, z); // JavaScript Java Golang
// * Cách 3: Sử dụng destructuring với rest operator
var [first, second, ...rest] = array;
console.log(first, second, rest); // JavaScript Java [ 'Golang' ]
console.log(rest); // ['Golang'];
// * 9. Rest parameter là lấy ra những phần còn lại
// * Cách dùng: Sử dụng dấu ba chấm (...) trước tên biến
// * ví dụ: ...rest
// * Phân biệt với toán tử spread: Spread là lấy ra từng phần tử của mảng hoặc object
// * Còn rest là lấy ra những phần tử còn lại sau khi đã lấy ra các phần tử đầu tiên

const { 
    a = 'default', 
    b, 
    ...rest 
} = {
    b: 'val1',
    c: 'val2',
    d: 'val3'
};

console.log(a, b, rest); // Output: ?
// * Output: default val1 {c: 'val2', d: 'val3'}
