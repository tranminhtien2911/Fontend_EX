/**
 * SLICE
 */
console.log("---- array.slice ----");
// Tạo ra một mảng copy của mảng ban đầu
const animals = ['tiger', 'lion', 'horse', 'elephant'];
// Cách 1: slice() tạo ra mảng mới y hệt mảng ban đầu
const animals2 = animals.slice();
console.log(animals2); //-> ['tiger', 'lion', 'horse', 'elephant']

// Cách 2; slice(start). start ở đây là vị trí index trong mảng
const animals3 = animals.slice(1);
console.log(animals3); //-> ['lion', 'horse', 'elephant']

// Cách 3: slice(start, end) . start là vị trí bắt đầu, end là vị trí kết thúc
// Nó sẽ sao chép từ vị trí start đến vị trí end - 1 
const animals4 = animals.slice(1,3);
console.log(animals4); //->['lion', 'horse']

const animals5 = animals.slice(-2);
console.log(animals5);

/**
 * SPLICE
 */
 console.log("---- array.splice ----");
 // Nó sẽ xóa phần tử trong mảng hoặc thêm phần tử trong mảng
 const pet = ['dog', 'cat', 'bird', 'dragon'];
// splice(start)
// const pet2 = pet.splice(2)
// console.log(pet2);

// splice(start, deleteCount); deleteCount là số phần tử muốn xóa hoặc thay thế
// const pet3 = pet.splice(0, 1);
// console.log(pet3);

// splice(start, deleteCount,item1, item2, itemN); deleteCount là số phần tử muốn xóa hoặc thay thế
const pet4 = pet.splice(0, 2, "dinasour", "pig", false, true);
// console.log(pet);

/**
 * SORT
 * Sắp xếp các phần tử trong mảng theo chuẩn unicode-16
 */
 console.log("---- array.sort ----");
const random = [1, 9999, 10,5, 09];
// console.log(random.sort()); //->  [1, 10, 5, 9, 9999]
// sort(function(a, b))
//function(callback)
const random2 = random.sort(function(a, b){
    if(a >b) return 1; // Sắp xếp theo tăng dần
    if(a<b) return -1; // Sắp xếp giảm dần
});
//Cách viết rút gọn
const random3 = random.sort((a,b) => (a > b ? 1:-1))
console.log(random3) // -> [1, 5, 9, 10, 9999]

/**
 * FIND
 */
console.log("---- array.find ----");
// Nó sẽ trả về phần tử đầu tiên trong mảng
const number = [2, 9999, 1000000, 5, 09];
// Tìm phần tử dầu tiên trong mảng lớn hơn 10
const findYourNumber = number.find((element)=> element > 10);
// Nếu không tìm thấy thì nó sẽ trả ra kq là undefined
console.log(findYourNumber); //->9999

/**
 * findIndex
 */
 console.log("---- array.findIndex ----");
 // Nó sẽ trả về vị trí index tìm thấy đầu tiên trong mảng thỏa điều kiện nào đó
const findYourIndex  = number.findIndex((element) => element < 10)
//Nếu không tìm thấy thì sẽ trả ra kết quả là -1
console.log(findYourIndex);

/**
 * MAP
 */
 console.log("---- array.map ----");
 // Duyệt qua từng phần tử trong mảng và trả ra một mảng mới không thẻ đổi mảng ban đầu
 const listNumber = [1,2,3,4,5];
// trả về một mảng mới mà các số(giá trị) trong mảng cũ nhân 2
const listNumberDouble = listNumber.map(function(value, index, array){
    return value * 2;
})
console.log(listNumberDouble);


/**
 * forEach
 */
 console.log("---- array.foreach ----");
 const listNumberTripple = listNumber.forEach((value, index, array)=>{
    return value * 3;
 })
 console.log(listNumberTripple);
// Hãy cho biết sự khác nhau giữa forEach và map? 
//Thì forEach không có return trả về, foreach luôn trả về undefind và không dừng được trừ khi không sử dụng nó

/**
 * FILTER
 */
console.log("---- array.filter ----");
// Dùng để filter(sàng lọc) các phần tử trong mảng thỏa điều kiện nào đó
// .filter(callback(value, index, array))
// const listNumber = [1,2,3,4,5];
const greaterThanThree = listNumber.filter((item, i, a)=>{
    return item > 3;
})
console.log(greaterThanThree); //-> [4, 5]

/**
 * SOME VÀ EVERY
 */
 console.log("---- array.some ----");
 //Trả về true khi thỏa 1 điều kiện và ngược lại trả về false khi không thỏa điều kiện nào cả
 const someNumber = listNumber.some(value => value > 3);
 console.log(someNumber); //true
 console.log("---- array.every ----");

 // Chỉ trả về true khi tất cả điều kiện đều đúng, ngược lại chỉ cần 1 cái sai thì nó sẽ return flase
 const everyNumber = listNumber.every(value => value > 3);
 console.log(everyNumber); // false
// true hoặc false

/**
 * REDUCE
 */
 console.log("---- array.reduce ----");
 //Gom các phần tử trong mảng lại thành 1
 // .reduce((a,b) => {}, initialze value);

 const totalNumber = listNumber.reduce(function(previousValue, currentValue ){
     console.log(previousValue , currentValue);
     return previousValue + currentValue;
 }, 0);

 console.log(totalNumber);



