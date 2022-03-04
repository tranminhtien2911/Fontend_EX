/**
 * Đọc và dịch các method đã học từ MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 * Lấy ví dụ cho các trường hợp input khác nhau của mỗi method
 * Mục đích của bài tập này: Giúp bạn học cách tự tra cứu, đọc tài liệu.
 * Đây là một kĩ năng không thể thiếu của 1 developer.
 */
 var a = [1,2,3,4,5];
 var b = [4,5,6,7];
 
 
 // Nối 2 mảng lại với nhau, method này tạo ra 1 mảng mới và chứa các phần tử của mảng a và mảng b
 var concat = a.concat(b);
 console.log("Sử dụng phương thức concat:");
 console.log(concat);
 console.log("-----------------------");
 
 //Sử dụng hàm push() để thêm 1 phần tử mới vào mảng, phương thức này sẽ thêm phần tử mới vào cuối mảng
 console.log("Sử dụng phương thức push:");
 a.push(6);
 console.log(a);
 console.log("-----------------------");
 
 // Sử dụng hàm pop() để loại bỏ phần tử trong mảng, phương thức này sẽ xóa đi phần tử cuối của mảng
 console.log("Sử dụng phương thức pop:");
 b.pop();
 console.log(b);
 console.log("-----------------------");
 
 // Ngược lại với pop() là xóa phần tử cuối cùng của mảng, shift() xóa phần tử đầu tiên trong mảng
 var c = [3,4,5,1,8]
 console.log("Sử dụng phương thức shift:");
 c.shift();
 console.log(c);
 console.log("-----------------------");
 
 //unshift(), phương thức này thêm phần tử cho mảng, phần tử được thêm ở đầu mảng
 var d = [1,2,3,4]
 console.log("Sử dụng phương thức unshift:");
 d.unshift(6);
 console.log(d);
 console.log("-----------------------");
 
 //slice(): Trích xuất 1 phần nào đó của mảng và tạo ra 1 mảng mới chứa các phần tử vừa được trích xuất
 //Với cú pháp slide(1,4); diễn giải: sẽ lấy các phần tử của mảng e với giá trị index bắt đầu là 1 và cuối là 4
 var e = ['Táo', 'Lê', 'Nho', 'Dâu', 'Ổi']
 console.log("Sử dụng phương thức slice:");
 console.log(e.slice(1,4));
 console.log("-----------------------");
 
 //splice(): Là phương thức khá linh hoặ, có thể thêm hoặc xóa nhiều phần tử trong mảng.
// Xóa phần tử - Cú pháp: splice(start, length)
//start là chỉ số của phần tử bắt đầu để xóa
//length là só phần tử muốn xóa
console.log("Sử dụng chức năng xóa của phương thức Splice");
var f = ["htc", "lg", "lenovo", "nokia", "samsung", "apple"];
f.splice(2,5)
console.log(f)
console.log("-----------------------");
//Nếu ta bỏ trống tham số "length" thì phương thức splice() sẽ xóa tất cả những phần tử bắt đầu từ phần tử có chỉ số là start cho đến hết mảng.
console.log("Sử dụng chức năng xóa của phương thức Splice nhưng không có length");
f.splice(1)
console.log(f)
console.log("-----------------------");
//Thêm phần tử - Cú pháp; splice(start, 0, phân tử 1, phần tử 2, phần tử n,...)
console.log("Sử dụng chức năng thêm của phương thức Splice");
f.splice(1,0, 'blackberry', 'vertu')
console.log(f)
console.log("-----------------------");
