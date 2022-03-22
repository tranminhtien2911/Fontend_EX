/**
 * By value và by references
 */
//By value -> giá trị thực sự được lưu trong vùng bộ nhớ
const num1 = 1;
const num2 = 1;
console.log(num1 === num2); //True
// By referrences -> nói tới vùng bộ nhớ
const arr1 = [1,2];
const arr2 = [1,2];
console.log(arr1 === arr2); //false

/**
 * So sánh 2 mảng cơ bản
 * 
 * JSON: Jacascript Object Notation
 * JSON.stringify(value) -> Chuyển đổi giá trị sang dưới dạng JSON string
 * JSON.parse
 * 
 */
console.log(JSON.stringify([1,2,3]));
console.log(JSON.parse("[1,2,3]"));

const arr1Str = JSON.stringify(arr1);
const arr2Str = JSON.stringify(arr2);
console.log(arr1Str === arr2Str); // true

/**
 * 2 cách để sao chép mảng cần biết
 * Mục đích: Giống như backup dữ liệu, mội hoạt động chỉnh sửa chỉ áp dụng trên bản sao 
 * chứ không làm thay đổi dữ liệu gốc
 */
const student = ["a","b","c","d","e"];
// C1 : sử dụng phương thức slice()
const sliceStudent = student.slice();
console.log(sliceStudent);
// C2 : spread operator [...array]
const spreadStudents = [...student];
console.log(sliceStudent)

/** 
 * 2 cách để gộp mảng cần nắm
 * [1,2] [3,4] [5,6] -> [1,2,3,4,5,6]
*/
// C1: concat
// 1. array1.concat(array2, array3, arrayN)
const array1 = [1,2];
const array2 = [3,4];
const array3 = [5,6];
const mergeArray = array1.concat(array2,array3)
console.log(mergeArray);

// C2: spread operator
// [...array]
const mergeArray2 = [...array1,...array2,...array3];
console.log(mergeArray2);

/**
 * Destructuring
 */
const toys = ['ball', 'sword', 'arrow','magic','water', 'fire'];
// Cách thông thường để lấy ra phần tử mong muốn
const a = toys[0];
const b = toys[1];
const c = toys[2]; 
console.log(a,b,c);
//-> làm như vậy rất mất thời gian, code cồng kềnh
// Cách giải quyết 
//const[] = toys;
const [x,y,z] = toys;
console.log(x,y,z);

/**
 * Rest parameter
 * Lấy ra phần còn lại 
 */
const [ball, sword,arrow, ...rest] = toys;
console.log(ball, sword , arrow);
//rest sẽ in ra phần còn lại của mảng toys
console.log(rest); //-> ['magic', 'water', 'fire']

function demo(a, ...rest){
    console.log(a,rest);
}
//Trong đó a = 1, rest = [2,3,4,5]
demo(1,2,3,4,5);