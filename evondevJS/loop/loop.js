/**
 * bài 1: Sao chép 1 mảng dùng vòng lặp for
 * bài 2: Đảo ngược "i love" -> "evol i"
 */
//Bài 1:
let number = [1,2,3,4,5,6,7,8]
let copyArr = [];
for(let i = 1; i<number.length; i++){
    copyArr.push(number[i]);
}
console.log(copyArr);

//Bài 2:
let str = 'i love'
let reverse = []
for(let i = str.length - 1 ; i >=0; i--){
    reverse.push(str[i]);
}
console.log(reverse.join(""));

/**
 * Vòng lặp While và do while
 * For of / for(variable of array)
 */