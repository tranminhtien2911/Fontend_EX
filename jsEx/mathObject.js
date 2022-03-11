// Dùng hàm powerup tính bình phương các số chia hết cho 2 trong mảng truyền vào

function powerup(arr) {
    // your code here!
    return arr.map(function(num){
        if(num % 2 == 0){
            num = Math.pow(num,2);
        }
        return num;
    })
  }

/** 
 * Dùng hàm average tính điểm trung bình 3 môn của một học sinh.
 * Làm tròn điểm trung bình
 * Ví dụ: [8, 8, 6.75]  => 8
 * Gợi ý: Dùng Math.round 
*/

// function average(arr) {
//     // your code here!
//     var temp = 0;
//     for(var i of arr){
//         temp += i; 
//     }
//     var avg = temp / arr.length;
//     return Math.round(avg);


//   }

/* 
  Viết hàm positiveNumber để chuyển các số âm trong một mảng thành các số dương.
  Yêu cầu sử dụng Math Object
*/

// function positiveNumber(arr) {
//     // your code here
//     return arr.map(function(num){
//         num = Math.abs(num)
//         return num
//     })
//   }

/** 
 * Viết hàm rightTriangle nhập vào 3 cạnh của một tam giác.
 * Cho biết đó có phải là tam giác vuông hay không? 
*/

// function rightTriangle(a, b, c) {
//     // your code here
//     var check = null;
//     var totalTwo = Math.pow(a,2) + Math.pow(b,2);
//     if(totalTwo > 0 && Math.pow(c,2)>0 && Math.pow(c,2) == totalTwo){
//         check = true;
//     }else{
//         check = false;
//     }
//     return check;
//   }
/** 
 * Viết hàm circumferenceOfCircle() tính chu vi và hàm acreageOfCircle() tính diện tích hình tròn 
 * khi biết bán kính
 * Với PI = 3.14  
*/

// function circumferenceOfCircle(r) {
//   // your code here!
//   var C = 2*r*3.14
//   return C;
// }
// function acreageOfCircle(r) {
//   //your code here!
//   var S = Math.pow(r,2) * 3.14;
//   return S;
  
// }

/** 
 * Viết hàm trigonim để tính 3 giá trị sin cos tan của một số nhập vào
 * Example: trigonim(45) = [ '0.851', '0.525', '1.620' ]
 * Gợi ý: Sử dụng toFixed() method
*/

// function trigonim(number) {
//   // your code here
//   var SCT = [];
//   var sin = Math.sin(number);
//   var cos = Math.cos(number);
//   var tan = Math.tan(number);
//   SCT.push(sin.toFixed(3));
//   SCT.push(cos.toFixed(3));
//   SCT.push(tan.toFixed(3));
//   return SCT;

// }
// console.log(trigonim(45))

