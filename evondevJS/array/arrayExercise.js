/**
 * Bài 1: Đảo ngược một chuỗi. 
 * Ví dụ: "My name is evondev" -> "evondev is name my"
 */

function reverseString(str){
    if (!str) return null;
    const split = str.split(" ");
    const reverse = split.reverse();
    return reverse.join(' ');
}

// console.log(reverseString("My name is evondev"));

/**
 * Bài 2: ĐẢo ngược chuỗi bao gồm các ký tự
 * Ví dụ: "i love" - > "evol i"
 */
function reverseWord(str){
    if (!str) return null;
    const splitStr = str.split(" ")
   
    const reverseW = splitStr.map(function(item){
        return item.split("").reverse().join("");
    })
    const reverseStr = reverseW.reverse().join(" ");
    return reverseStr;
}
// console.log(reverseWord("i love"));

/**
 * Bài 3:
 * In hoa chữ cái đầu trong chữ
 * VD: "my name is evondev" -> "My name is Evondev" 
 */

function upperFirstWord(str){
    const splitStr = str.split(" ");
    const upperWord = splitStr.map(function(item){
        const fistW = item.toUpperCase().charAt(0).slice();
        const lastW = item.toLowerCase().slice(1);
        const strComplete = fistW + lastW;
        return strComplete;
    })
    return upperWord.join(" ");
}
console.log(upperFirstWord("my name is evondev"));
