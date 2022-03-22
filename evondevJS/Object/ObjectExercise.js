/**
 * 1. Viết 1 function kiểm tra value có phải là object hay không?
 * Thông thường sẽ nghĩ có thể dùng : typeof value === "object"
 * Tuy nhiên {} [] null cũng cho ra kết quả là object như vậy chưa đúng lắm
 * 
 */
function isObject(value){
    if(typeof value === "object" && !Array.isArray(value) && value !==null){
        return true;
    }
    return false;
}
// plain object -> true else return false
// console.log(isObject([]))

/**
 * Bài 2: {a:1, b:2} -> [["a",1],["b",2]]
 */
function objetcToArray (object){
    // check nếu ko phải object thì dừng
    if(!isObject(object)) return;
    // Nếu là object thì xử lý
    // --- cách 1:
    // return Object.entries(object);

    // --- cách 2:
    // let value = Object.keys(object).map((key) => [key, object[key]])
    // return value;

    //--- cách 3:
    let result = [];
    for(let key in object){
        //hasOwnProperty(key) -> nếu object chứa key trả về true ngược lại trả về false
        if(object.hasOwnProperty(key)){
            result.push([key, object[key]]);
        }
    }
    return result;
}
console.log(objetcToArray({a:1, b:2}))


