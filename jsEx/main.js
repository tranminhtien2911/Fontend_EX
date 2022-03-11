/**
 * Viết hàm calculate trả về tích các số từ start đến end, không tính end 
 * Ví dụ: calculate(2, 5) trả về kết quả 24 (vì 2 * 3 * 4 = 24)
 */
//  function calculate(start, end) {
//     // viết code ở đây.
//     var multi = 1;
//     for(var i=start; i< end; i++){
//         multi *= i;
//     }
//     return multi;
//   }

/**
*  Sử dụng vòng lặp for viết hàm has để kiểm tra xem array có tồn tại 1 giá trị xác định hay không
*  Tham số:
*- array: mảng cần kiểm tra
*- value: giá trị cần kiểm tra xem có tồn tại trong array không
* Return:
*- true nếu có tồn tại
*- false nếu không tồn tại

*/
// function has(array, value) {
//     // viết code ở đây
//     var check = 0;
//     for(var i = 0; i < array.length; i++){
//         if(array[i] == value){
//             check = 1
//         }else{
//             check = 0
//         }
//     }
//     return (check>0) ? true:false;
// }

// console.log(has([5, 2, 4, 8,4],4));

//Bài 7 Tính giai thừa
// function factorials(number) {
//     var multi = 1;
//     if(number == 0){
//         multi;
//     }else{
//         for(var i = 1; i <= number; i++){
//             multi *= i;
//         }
//     }
//     return multi;
// }

// console.log(factorials(5));

// var myCat = [
//     {name: 'Hexa', weight : 3.4, isAlive: 'live'},
//     {name: 'Mimi', weight : 3, isAlive: 'has gone'},
//     {name: 'Ken', weight : 2.5, isAlive: 'live'},
// ];
// // for...of
// for(var cat of myCat){
//     console.log(cat.name)
// }
// // for...in
// for(var cat2 in myCat){
//     console.log(myCat[cat2].isAlive)
// }

/**
 * Sử dụng vòng lặp for...of để tính tích của các phần tử trong một array gồm các số
 */
 
//  function multiply(arr) {
//     // Write code here...
//     var tich = 1;
//     for(var a of arr){
//         tich *= a;
//     }
//     return tich;
//   }

//   console.log(multiply([2, 3, 4]))

/**
 * Sử dụng vòng lặp for...in để lấy về tất cả các key của object sau, 
 * in ra cả các key của các nested object (object con lồng bên trong object lớn)
 * Gợi ý: đây là bài tập khó, bạn nên tìm hiểu về recursive trước
 */

//  var apartment = {
//     bedroom: {
//       area: 20,
//       bed: {
//         type: 'twin-bed',
//         price: 100
//       }
//     }
//   };
//   function getObjectKey(obj, keys=[]) {
//     // Write code here...
//     for(var key in obj){
//         if(typeof obj[key] == 'object'){
//             keys.push(key);
//             getObjectKey(obj[key], keys);
//         }else{
//             keys.push(key);
//         }
//     }
//     return keys;

//   }
//   result = [];
//   var a = getObjectKey(apartment, result); 
//   var b = getObjectKey(apartment)
//   console.log(a)
 /**
 * viết hàm has để kiểm tra xem object có tồn tại 1 key xác định hay không
 * Tham số:
 *  - object: object cần kiểm tra
 *  - key: key cần kiểm tra xem có tồn tại trong object không
 * Return:
 *  - true nếu có tồn tại
 *  - false nếu không tồn tại
 */
 
// function has(object, key) {
//     for (var m in object){
//         return (m == key) ? true:false;
//     }
// }

// function has(object, key) {
//     var check = true;
//     for (var m in object){
//         if(m == key){
//             check
//             break;
//         }else{
//             check = false;
//         }
//     }
//     return check;
// }
// console.log(has({name: "Tom", age: 21}, "name"));

/**
 * Giả thiết: numbers là một array các số nguyên
 * Yêu cầu: 
 * - trả về tổng các số, dùng vòng lặp for ... of
 * - nếu array trống trả về 0
 */
 
//  function sum(numbers) {
//     // Write code here...
//     var total = 0;
//     for(var num of numbers){
//         total += num;
//     }
//     return total;
//  }

//  console.log(sum([1, 2, 3]))

/*
	Viết 1 chương trình xóa đi n phần tử cuối cùng của 1 array
*/
// function removeEnd(arr, n) {
//     // your code here!
//     for(var i=0; i<n;i++){
//         arr.pop();
//     }
//     return arr;
// }