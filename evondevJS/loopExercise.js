/**
 * Bài 1: Cho 1 mảng gồm nhiều giá trị [1,1000, false, null, 'evondev', "", undefiled, "javascript",[1,2,3]].
 * Viết chương trình loại bỏ các giá trị falsy ra khỏi mảng chỉ giữ lại các giá trị truthy.
 * Gợi ý các giá trị truthy là 0 null undifined false "" NaN
 */

const arr = [1, 1000, false, null, 'evondev', "", undefined, "javascript", [1, 2, 3]]
const newArr = [];
for (var item of arr) {
    if (Boolean(item) == false) {
        continue
    } else {
        newArr.push(item);
    }
}
// console.log(newArr);

/**
 * Bài 2: Cho 1 mảng phức tạp [[1,2,3, [false, null]],[1,5,6,["javascript"]], [888,666, [90]]].
 * Và kết quả mmong muốn là [1,2,3,false,null,1,5,6,"javascript",888,666,90]
 */

const arr1 = [[1, 2, 3, [false, null]], [1, 5, 6, ["javascript"]], [888, 666, [90]]];
const newArr1 = []
//C1: của mình
for (var item of arr1) {
    for (var item1 of item) {
        if (typeof item1 == 'object') {
            for (var item2 of item1) {
                newArr1.push(item2)
            }
        } else {
            newArr1.push(item1)
        }
    }
}
// console.log(newArr1)

//C2:
const result = arr1.flat(2)
// console.log(result);

/**
 * Bài 3: Đảo ngược số nguyên
 * Ví dụ; 1234 -> 4321, -567 ->-765
 * Math.sign(123) -> 1 (Vì 123 là số dương)
 * Math.sign(-123) -> -1 (Vì -123 là số âm)
 */
function reverseNumber(number) {
    //convert to String
    //split("") => [value]
    //reverse()
    //join("")
    const value = parseInt(number.toString().split("").reverse().join("")) * Math.sign(number);
    console.log(value)
}
// reverseNumber(-123)

/**
 * Bài 4: Viết chương trình có tên là fizzBuzz với đầu vào là một số nguyên, và cho chạy từ 1 cho tới
 * số nguyên đó rồi kiểm tra new số chia hết cho 2 thì in ra chữ "Fizz", nếu chia hết cho 3 thì in ra
 * chữ "Buzz", nếu chia hết cho 2 và 3 thì in ra "FizzBuzz"
 * 
 */

function fizzBuzz(number){
    if(number%2 == 0  && number%3 == 0 ){
        console.log()
    }
}