// Cách khai báo object
// object literal
let objectLiteral = {};

//object constructor
let objectConstructor = new Object();
//VD:
let student={
    name: "evondev",
    age: 27,
    male: true,
    "last-name": "tuan",
    hi: function(){
        console.log("hello evondev");
    }
}
/**
 * Làm sao để truy xuất vào những key của object
 * properties
 * method
 */
// --- 2 cách truy xuất giá trị cảu object
// ------ 2.1 Dot notation.
console.log(student.name);

// ------ 2.2 Bracket notation ["key"]
console.log(student["age"]);
console.log(student["last-name"]);

/**
 * Thay đổi giá trị
 */
student.age = 20;
student.male = "male";
//Tự động thêm key mới trong Object
student.isDeveloper = true;
student["is-developer"] = false;
student.hello = function(){
    console.log("hello");
}
console.log(student);

/**
 * Cách xóa giá trị trong Object
 */
delete student["last-name"];
console.log(student)

/**
 * For in trong object
 */
for(let key in student ){
    console.log(key);
    console.log(student[key]);
}

/**
 * Phương thức Object.keys
 */
// Object.keys(object) -> trả về 1 mảng chứa tất cả các keys của object
console.log("---Object.keys()---")
let keys = Object.keys(student);
console.log(keys);
console.log(keys.length);

// Object.value(object) -> trả về 1 mảng chứa tất các các giá trị của object
console.log("---Object.value()---")
let value = Object.values(student);
console.log(value);

// Object.entries(object) -> trả về 1 mảng chứa nested [["name", "evondev"], ["age", 20]] gồm có 
console.log("---Object.entries()---")
let entries = Object.entries(student);
console.log(entries);

// Object.assign(object) -> Giống concat bên mảng
console.log("---Object.entries()---")
let a = { 
    firstName: "tuan"
};

let b = {
    lastName: "Tran"
}
let c = Object.assign(a,b);
console.log(c)
let d = {...a,...b};
console.log(d)

// Object.freeze(object) -> Ngăn chặn chỉnh sửa key và value cảu object
console.log("---Object.freeze()---")
let car = {
    brand : "BMM"
}
let newCar = Object.freeze(car);
newCar.brand="audi";
console.log(newCar);

//Object.seal(object) -> Cho phép chỉnh sửa nhưng không được thêm key value mới
console.log("---Object.seal()---")
let user = {
    fullName: "Nguyen Van A",
    school:{
        name: "Cao Thang",
        room:{
            name:"IT",
        }
    }
}
let newUser = Object.seal(user);
newUser.fullName  ="Tran Van B";
newUser.age = 20;
console.log(newUser);

/**
 * Cách sao chép một Object
 */
//Cách 1: Sử dụng operator (chỉ copy 1 cấp)
console.log("Dùng operator để sao chép");
const newHuman = {...user};
console.log(newHuman);

//Cách 2: Chỉ copy 1 cấp
console.log("Dùng Object.assign để sao chép");
let newHuman2 = Object.assign({}, user);
console.log(newHuman2);

//Cách 3: Copy cho nhiều cấp
let newUser3 = JSON.parse(JSON.stringify(user));
newUser3.school.name = "Designer";
console.log(newUser3);

/**
 * THIS KYWORD
 * this ở đây nó sẽ đề cập đến object gần nhất
 */
console.log("---- this keyword ----")
let student2 = {
    name: "evondev",
    age: 27,
    male: true,
    "last-name": "tuan",
    hi: function(){
        console.log(`my name is ${this.name} and i am ${this.age} years old`);
    },
    fullname: {
        name:"Tran Anh Tuan",
    }

}
student2.hi();

/**
 * Optional chaining
 */
console.log(student2.fullname); //undifined
// console.log(student.fullname.name); // undefined.name -> Cannot read properties of undefined (reading 'name')
// Cách viết bình thường khi check 1 cái object
if(student2.fullname){
    if(student2.fullname.name){
        console.log(student2.fullname.name);
    }
}
// Cách optional chaining
//student2.fullname?.name?
console.log(student2.fullname?.name);

/**
 * Destrucring Object
 */
console.log("--- Destrucring Object ---");
//Cách gọi các key thông thường
// const name = student2.name;
// const age = student2.age;
// const male = student2.male;
// console.log(name, age, male);

//Như vậy hơi cồng kềnh, vì vậy ta có thể sử dụng cú pháp sau để gọi
const{name, age, male,...rest} = student2;
console.log(name, age, male, rest);

// ---- NORMAL function
// function whatYourInfo(name, age, school){
//     console.log(name, age, school);
// }
// Cách đầu
//Khi mới tạo ta còn nhớ được vị trí sắp xếp của các tham số để điền đúng đối số
// whatYourInfo("evodev", 27, "Cao Thang");
// Tuy nhiên, sau nhiều ngày nhiều tháng hoặc nhiều năm ta có dịp gặp lại, ta ko nhớ 
//chính xác thứ tự sắp xếp như thế nào? Ta cho đối số vào ko đúng thứ tự các tham số
// whatYourInfo(27, "Cao Thang", "evondev");

// ---- Function with Object parameter
// Giúp khỏi phải nhớ vị trí các tham số, ko cần quan tâm thứ tự
function whatYourInfo(obj){
    console.log(obj.name, obj.age, obj.school);

}

let newObj = {
    name: "evondev",
    age: 27,
    school: "Cao Thang",
}
whatYourInfo(newObj);


// ---- object destrucring parameter
function whatYourInfo2({name, age, school}){
    console.log(name, age, school)
}
 whatYourInfo2({
    name: "evondev",
    age: 27,
    school: "Cao Thang",
 })
