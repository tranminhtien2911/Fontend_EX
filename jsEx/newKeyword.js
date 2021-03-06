/**
 * Tạo một đối tượng student gồm các property name, sex, age
 * Example:
  name: "CodersX",
  sex: "Male",
  age: 1
 * Viết hàm showInfo trả về object đó
*/

// var student = {
//     name: "Minh Tien",
//     sex: "nam",
//     age: 23
// }

// function showInfo(name, sex, age) {
//   // viết code ở đây
//     this.name = name;
//     this.sex = sex;
//     this.age = age;
//     return this;
// }

// var student1 = new showInfo("Ho Anh", "nu", 18);
// console.log(student1)
/**
 * Viết hàm xoá thuộc tính (prop) khỏi object student
 * Trả về object đã được xoá
 * Example:
 *  removeProp("name") = { class: “VI”, rollno: 12 }
*/

// function removeProp(prop) {
//     var student = {
//             name : "David Rayy",
//             class : "VI",
//             rollno : 12
//         }
//   // chỉ viết code ở dưới dòng này.
//     for(var i in student){
//         if(prop == i){
//             delete student[i];
//         }
//     }
//     return student
// }
// console.log(removeProp("name"))

/**
 * Viết hàm countProperty để in ra độ dài của một đối tượng
 * @param {object}
 * @return {number}
 * 
 * Example: 
 * var student = {
 *      name: "Jerry", 
 *      age: 14,
 *      role: "student"
 *  }
 * lengthObj(student); // length: 3
}
*/

// function countProperty(obj) {
//     // viết code ở đây
//     var total = 0;
//     for(var i in obj){
//         total++
        
//     }
//     return total;
    
//   }
//   console.log(countProperty({ name: "Herry", age: 10 }))
/**
 * Viết hàm xây dựng Shape để tạo các đối tượng hình học có các thuộc tính sau:
 *  {
 *    color: String,
 *    shape: String,
 *    fill: boolean
 *  }
*/

// function Shape(color, shape, fill) {
//     // Your code here
//     this.color = color;
//     this.shape = shape;
//     this.fill = fill;
//     return this
//   }
  
//   var shape1 = new Shape("red", "rectangle", true);
//   var shape2 = new Shape("orange", "triangle", false);
//   var shape3 = new Shape("tomato", "circle", true);

/*
  Viết hàm xây dựng các đối tượng student có các thuộc tính sau:
  - name: String,
  - level: String,
  - school: String

  Trong đó, thuộc tính school là thuộc tính dùng chung, có giá trị là "CodersX".
*/

// function Student(name, level) {
//     this.name = name;
//     this.level = level;
// }

// Student.prototype.school = "CodersX"

// var student1 = new Student("Herry", 01);
// console.log(student1.school);

/*
  Viết hàm xây dựng các đối tượng student gồm các thuộc tính:
    diemToan: Number,
    diemLy: Number,
    diemHoa: Number
    average: [function];

    average là hàm tính điểm trung bình 3 môn. 
    average là thuộc tính dùng chung.
  Output: 
    student1.average() = 7
    student2.average() = 8
*/

function Student(diemToan, diemLy, diemHoa) {
    // Viết code ở đây
    this.diemToan = diemToan,
    this.diemLy = diemLy,
    this.diemHoa = diemHoa
  }
  
  Student.prototype.average = function() {
    // Viết code ở đây
    var tb = (this.diemToan + this.diemLy + this.diemHoa) / 3;
    return tb;

  }
  
  var student1 = new Student(6, 7, 7);
  var student2 = new Student(8, 9, 6);
  console.log(student1.average())