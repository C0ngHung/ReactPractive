// * Ehance object literal
// * Làm được những việc sau:
// * 1. Định nghĩa key: value cho object
// * 2. Định nghĩa method cho object
// * 3. Định nghĩa key cho object dưới dạng biến

// * Ví dụ 1:
var name = 'JavaScript';
var price = 1000;

var course = {
    name: name,
    price: price
};

console.log(course); // { name: 'JavaScript', price: 1000 }
// * Sử dụng enhance object literal có thể viết gọn như sau: Đây được gọi là định nghĩa key: value cho object
var name = 'JavaScript';
var price = 1000;
var course = {
    name,
    price
};

// * Ví dụ 2: Định nghĩa method cho object
var name = 'JavaScript';
var price = 1000;
var course = {
    name,
    price,
    getName: function() {
        return this.name;
    }
};
console.log(course.getName()); // JavaScript
// * Sử dụng enhance object literal có thể viết gọn như sau: Đây được gọi là định nghĩa method cho object
var name = 'JavaScript';
var price = 1000;
var course = {
    name,
    price,
    getName() {
        return this.name;
    }
};

// * Ví dụ 3: Định nghĩa key cho object dưới dạng biến
var fieldName = 'name';
var fieldPrice = 'price';

const course = {
    [fieldName]: 'JavaScript',
    [fieldPrice]: 1000,
};
console.log(course); // { name: 'JavaScript', price: 1000 }


// * Thực hành sử dụng Enhanced object literals: Cho trước mảng infoArr, hãy viết hàm arrToObj để chuyển array thành object.
// *Gợi ý: Sử dụng phương thức reduce
function arrToObj(arr) {
    return arr.reduce((obj, [key, value]) => {
        obj[key] = value;
        return obj;
    }, {});
}

function arrToObj(arr) {
    const obj = {};
    for(const [key, value] of arr) {
      obj[key] = value;
    }
    return obj;
    
   }
// Expected results:
/**
const obj1 = arrToObj([
   ['name', 'Son Dang'], 
   ['age', 21], 
   ['address', 'Ha Noi']
])
console.log(obj1)
Output: { name: 'Son Dang', age: 21, address: 'Ha Noi' }

const obj2 = arrToObj([
   ['name', 'Duc Long'], 
   ['age', 18], 
   ['address', 'Ha Noi']
])
console.log(obj2)
Output: { name: 'Duc Long', age: 18, address: 'Ha Noi' }
*/



