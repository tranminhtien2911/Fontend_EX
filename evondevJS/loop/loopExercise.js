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

function fizzBuzz(number) {
    for (let i = 1; i <= number; i++) {
        if (i % 2 === 0 && i % 3 === 0) {
            console.log("FizzBuzz");
        }else if (i % 2 === 0) {
            console.log("Fizz");
        }else if (i % 3 === 0) {
            console.log("Buzz");
        }
    }
}

// fizzBuzz(15);

/**
 * Bài 6: Cho 1 mảng các giá trị số [1,2,3,1,1,1,2,2,2,5,5,5,7,7,6].
 * Viết một function trả vè một mảng với các giá trị unique. Kết quả ở trên sẽ là [1,2,3,5,7,6]
 */

function unique(arr){
    let result = [];
    if(!Array.isArray(arr)) return result;
    for(let i = 0; i < arr.length ; i++){
        if(!result.includes(arr[i])){
            result.push(arr[i]);
        }
    }
    return result;
}

// console.log(unique([1,2,3,1,1,1,2,2,2,5,5,5,7,7,6]));

/**
 * Bài 7: Viết 1 function xử lý từ 1 mảng lớn thành nhiều mảng con dựa vào một số nguyên đầu vào.
 * Ví dụ ([1,2,3,4,5], 2) -> [[1,2], [3,4], [5]]
 * ([1,2,3,4,5,6], 3) -> [[1,2,3],[4,5,6]]
 */

function splitArray(array, number){
    let result = [];
    let index = 0;
    while(index < array.length){
        result.push(array.slice(index, number + index));
        index += number;

    }
    return result;
}
console.log(splitArray([1,2,3,4,5,6],3));