/**
 * Các phương thức trong mảng
 */

const students1 = ['evondev', 'tuan', 'nam', 'thanh', 'trung', 'tuan'];
//length --> trả về độ dài của mảng

console.log("--- .length ---");
console.log(students1.length);

//reverse --> đảo mảng
console.log("--- array.reverse() ---");
console.log(students1.reverse());

//join -> Nối các phần tử trong mảng thành chuỗi
console.log("--- array.join() ---");
console.log(students1.join());
console.log(students1.join(" "));

// includes -> kiểm tra mảng đó có chứa phần tử từ khác không ?
console.log("--- array.includes() ---");
console.log(students1.includes("evondev")); // true
console.log(students1.includes("abc")); // false

// indexOf -> Tìm về vị trí của phần tử tìm thấy đầu tiên
console.log("--- array.indexOf() ---");
console.log(students1.indexOf("tuan")); //-> 0

// indexOf -> Tìm về vị trí của phần tử tìm thấy đầu tiên
console.log("--- array.indexOf() ---");
console.log(students1.lastIndexOf("tuan")); //-> 4

// push -> thêm phần tử vào cuối mảng
console.log("--- array.push() ---");
console.log(students1.push("javascript"));
console.log(students1);

// unshift -> thêm phần tử vào đầu mảng
console.log("--- array.unShift() ---");
console.log(students1.unshift("Frontend"));
console.log(students1);

//pop -> Xóa phần tử cuối cùng trong mảng
console.log("--- array.pop() ---");
console.log(students1.pop());
console.log(students1);

//shift -> Xóa phần tử đầu tiên trong mảng
console.log("--- array.shift() ---");
console.log(students1.shift());
console.log(students1);





