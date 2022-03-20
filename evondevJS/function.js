// function (hàm)
//Khai báo function
//Cú pháp(Syntax): function fuctionName(parameters, parameters){
    // Your code
//}

// Lưu function vào 1 biến rồi gọi sau này
// function add(a = 0, b = 0){
//     console.log(a + b);
//     return a + b;
// }
// add(500,700)
// const sum2 = add; // Gán function add cho biến sum2 nhưng chưa được gọi
// sum2(300,400);
//Tham số là function
// VD: Tính trung bình của a và b -> (a + b) / 2
// fn: function

// function average(a, b, fn){
//     const total = fn(a,b);
//     return total / 2
// }

// let result = average(200, 300, sum2)
// console.log(`result ${result}`)

// Anonymous Function (function expression)
//IIFE (function chạy ngay lập tức)

//Scope (Phạm vi của biến)
// Global scope, function scope
// let myName = 'evondev';
// function logYourName(){
//     let myName2 = "Tuan"; //function scope
// }

// console.log(myName);
/**
 * Bài 1:
 * So sánh 2 số a và b tìm ra số lớn hơn
 */
function compare( a = 0 , b = 0 ){
    // if(a > b){
    //     console.log(`Số lớn hơn là ${a}`);
    // }else if(a == b) {
    //     console.log('Hai số bằng nhau');
    // }else{
    //     console.log(`Số lớn hơn là ${b}`);
    // }
    if (typeof a !== 'number' || typeof b !== 'number') return 0;
    return Math.max(a, b)
}
// console.log(compare(10, 20))

/**
 * Bài 2:
 * in hoa chữ cái đầu trong chữ ví dụ : tuan -> Tuan , NAM -> Nam
 */

function capitalize (word = ""){
    if(word.length === 0) return null;
    //Cách của Tiến
    // let newWord = word.substring(1, word.length).toLowerCase();
    // let change = word.substring(0,1).toUpperCase();
    // let connect = change + newWord;
    // return connect;

    //Cách của Evondev
    let newWord  = word.toUpperCase().charAt(0).slice();
    let otherWord = word.toLowerCase().slice(1);
    return newWord + otherWord
}

// console.log(capitalize("NAM"))

/**
 * Bài 3:
 * Viết hàm có sử dụng callback (function là parameter của function khác) in ra kết quả của hàm compare đã viết ở trên.
 */
function useCallback( a, b, callback){
    let max = compare(a , b);
    callback(max);
}

function prinMax(number){
    console.log("Max number is " + number);
}

console.log(useCallback(500, 1000, prinMax));
