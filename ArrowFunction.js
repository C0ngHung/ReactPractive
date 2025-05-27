// * 4. Arrow Function
const logger = function(log) {
    console.log(log);
}
logger('Message...'); 
// * Chuyển đổi thành Arrow Function
const loggerArrow = (log) => {
    console.log(log);
}

// * Ví dụ 2.
const sum = (a, b) => {
    return a + b;
}
console.log(sum(2,2));
// * Có thể viết gọn hơn như sau:
const sum2 = (a, b) => a + b;
console.log(sum2(3,3));
// * Ví dụ 3. Với Object
const sum3 = (a, b) => {
    return {
        a: a,
        b: b
    };
};
// * Có thể viết gọn hơn như sau:
const sum4 = (a, b) => ({a: a, b:b});

// * Ví dụ 4. Hàm nhận tham số duy nhất
const loggger2 = (log) => console.log(log);
// * Có thể việt gọn hơn như sau:
const logger3 = log => console.log(log);
// * Đặc tính của Arrow Function là không có từ khóa this, 
// * do đó không thể sử dụng trong các phương thức của đối tượng. Ví dụ:
const person = {
    name: 'John',
    age: 30,
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
        // * this ở đây là context của đối tượng person
    },
    // * Không thể sử dụng Arrow Function ở đây
    // * Arrow fuction không có context của nó: undefined
    greetArrow: () => {
        console.log(`Hello, my name is ${this.name}`); // this sẽ không trỏ đến person
    }
};
// * Không thể sử dụng arrow function để làm function constructor được 
// * Ví dụ cụ thể:
const Course = function(name, price) {
    this.name = name;
    this.price = price
}

const jsCourse = new Course('JavaScript', 1000);
console.log(jsCourse);
// * Nhưng nếu đổi lại bằng Arrow funtion thì sẽ không được 
const CourseArrow = (name, price) => {
    this.name = name;
    this.price = price;
}; // * => TypeError: CourseArrow is not a constructor


// * Sử dụng arrow function để tạo hàm triple nhận vào 1 tham số x và trả về giá trị x * 3.

// Expected results:
// console.log(triple(2)) // Output: 6
// console.log(triple(3)) // Output: 9
// console.log(triple(5)) // Output: 15

const triple = (x) => x * 3; 