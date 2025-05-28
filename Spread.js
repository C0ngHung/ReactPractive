// * Toán tử spread và bổ sung một chút về toán tử rest
function logger(...params) {
 console.log(params);
}
logger(1, 2, 3); // Output: [1, 2, 3]
// * Nếu function logger(a, ...params) thì a sẽ là 1, các phần tử còn lại sẽ là params [2, 3]
// * Viết bằng destructuring
function logger2({name, price, ...rest}) {
    console.log(name);
    console.log(price);
    console.log(rest);
}
logger2({
    name: 'JavaScript',
    price: 1000,
    description: 'Description content'
});
// Output: 
// * Nếu viết với mảng thì sẽ là
function logger3([a, b]) {
    console.log(a);
    console.log(b);
}
logger3([2, 6]); // Output: 2 6

// * Toán tử spread hay còn gọi là toản tử giải
var array1 = ['JavaScript', 'Java', 'Golang'];
var array2 = ['ReactJS', 'VueJS'];
var array3 = [...array1, ...array2]; // * Sử dụng toán tử spread để nối hai mảng
console.log(array3); // Output: ['JavaScript', 'Java', 'Golang', 'ReactJS', 'VueJS']
// * Nối 2 object
var object1 = {
    name:'JavaScript'
};
var object2 = {
    price: 1000
};
var object3 = {
    ...object1,
    ...object2
};
console.log(object3); // Output: {name: 'JavaScript', price: 1000}
// * Ví dụ thực tế:
var defaultConfig = {
    api: 'https://domain-trang-khoa-hoc',
    apiVersion: '1.0',
    other: 'other',
    //
    //
    // 
};
var excerciseConfig = {
    ...defaultConfig, // * Sử dụng toán tử spread để kế thừa các thuộc tính từ defaultConfig
    api: 'https://domain-trang-bai-tap',
    // * Nếu mình đặt 2 key trùng name nhau thì nó sẽ lấy giá trị của key được định nghĩa sau
}

console.log(excerciseConfig);
// Output: {api: 'https://domain-trang-bai-tap', apiVersion: '1.0', other: 'other'}
// * Sử dụng toán tử spread để truyền tham số cho hàm
var array = ['JavaScript', 'Java', 'Golang'];
function logger4(a, b, c) {
    console.log(a, b, c);
}
logger4(...array); // * Sử dụng toán tử spread để truyền tham số cho hàm
// Output: JavaScript, Java, Golang
// * Nhưng bình thường sẽ dùng ...rest
var array = ['JavaScript', 'Java', 'Golang'];
function logger4(...rest) {
    for (var i = 0; i < rest.length; i++) {
        console.log(rest[i]);
    }
}
logger4(...array);
// * Rest kết hợp với việc sử dụng destructuring và khi sử dụng nó trong việc định nghĩa ra tham số
// * Còn khi truyền đối số thì nó là spread (...array) và khi mà sử dụng nó trong việc giải nó trong 1
// * array hay 1 object khác thì là spread

const a = [1, 2, 3];
const b = [2, 3];
const c = [...a, ...b];

console.log(c); // Output: ? [1, 2, 3, 2, 3]
