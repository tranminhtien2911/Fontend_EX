/**
 * Đọc và dịch các method đã học từ MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 * Lấy ví dụ cho các trường hợp input khác nhau của mỗi method
 * Mục đích của bài tập này: Giúp bạn học cách tự tra cứu, đọc tài liệu.
 * Đây là một kĩ năng không thể thiếu của 1 developer.
 */
//  var a = [1,2,3,4,5];
//  var b = [4,5,6,7];


// Nối 2 mảng lại với nhau, method này tạo ra 1 mảng mới và chứa các phần tử của mảng a và mảng b
//  var concat = a.concat(b);
//  console.log("Sử dụng phương thức concat:");
//  console.log(concat);
//  console.log("-----------------------");

//Sử dụng hàm push() để thêm 1 phần tử mới vào mảng, phương thức này sẽ thêm phần tử mới vào cuối mảng
//  console.log("Sử dụng phương thức push:");
//  a.push(6);
//  console.log(a);
//  console.log("-----------------------");

// Sử dụng hàm pop() để loại bỏ phần tử trong mảng, phương thức này sẽ xóa đi phần tử cuối của mảng
//  console.log("Sử dụng phương thức pop:");
//  b.pop();
//  console.log(b);
//  console.log("-----------------------");

// Ngược lại với pop() là xóa phần tử cuối cùng của mảng, shift() xóa phần tử đầu tiên trong mảng
//  var c = [3,4,5,1,8]
//  console.log("Sử dụng phương thức shift:");
//  c.shift();
//  console.log(c);
//  console.log("-----------------------");

//unshift(), phương thức này thêm phần tử cho mảng, phần tử được thêm ở đầu mảng
//  var d = [1,2,3,4]
//  console.log("Sử dụng phương thức unshift:");
//  d.unshift(6);
//  console.log(d);
//  console.log("-----------------------");

//slice(): Trích xuất 1 phần nào đó của mảng và tạo ra 1 mảng mới chứa các phần tử vừa được trích xuất
//Với cú pháp slide(1,4); diễn giải: sẽ lấy các phần tử của mảng e với giá trị index bắt đầu là 1 và cuối là 4
//  var e = ['Táo', 'Lê', 'Nho', 'Dâu', 'Ổi']
//  console.log("Sử dụng phương thức slice:");
//  console.log(e.slice(1,4));
//  console.log("-----------------------");

//splice(): Là phương thức khá linh hoặ, có thể thêm hoặc xóa nhiều phần tử trong mảng.
// Xóa phần tử - Cú pháp: splice(start, length)
//start là chỉ số của phần tử bắt đầu để xóa
//length là só phần tử muốn xóa
// console.log("Sử dụng chức năng xóa của phương thức Splice");
// var f = ["htc", "lg", "lenovo", "nokia", "samsung", "apple"];
// f.splice(2,5)
// console.log(f)
// console.log("-----------------------");
//Nếu ta bỏ trống tham số "length" thì phương thức splice() sẽ xóa tất cả những phần tử bắt đầu từ phần tử có chỉ số là start cho đến hết mảng.
// console.log("Sử dụng chức năng xóa của phương thức Splice nhưng không có length");
// f.splice(1)
// console.log(f)
// console.log("-----------------------");
//Thêm phần tử - Cú pháp; splice(start, 0, phân tử 1, phần tử 2, phần tử n,...)
// console.log("Sử dụng chức năng thêm của phương thức Splice");
// f.splice(1,0, 'blackberry', 'vertu')
// console.log(f)
// console.log("-----------------------");

/** 
 * Viết function trả về n phần tử đầu tiên có trong mảng.
*/

// function first(arr, n) {
//     // your code here...
//     var temp = [];
//     for(var i = 0; i<n; i++){
//         var a = arr.shift();
//         temp.push(a);
//     }
//     return temp;
//   }
//   console.log(first([1,2,3],2));


/**
 * 1. Viết hàm double nhận vào 1 số bất kì, trả về  số đó nhân đôi 
 *  Vd: double(2) === 4
 * 2. Viết hàm sumAndDo nhận vào 1 array và 1 callback function. 
 * Hàm sumAndDo làm nhiệm vụ tính tổng array đó, 
 * sau đó gọi callback function với tham số là kết quả tổng vừa tính
 * 3. Nếu mảng trống trả về giá trị 0
 * Vd: sumAndDo([1, 2, 3], double) === 12
 */

//  function double(num) {
//     // viết code ở đây.
//     num+= num;
//     return num;
//   }  
//   function sumAndDo(nums, callback) {
//     // viết code ở đây.
//     var sum = 0;
//     for(var i = 0; i<nums.length; i++){
//         sum += callback(nums[i]);
//     }
//     return sum
//   }

/**
 * 1. Viết hàm transform nhận vào 1 array gồm các số và 1 function callback. 
 * Nội dung của hàm bao gồm:
 * - Khai báo 1 biến result có giá trị là 1 empty array
 * - Lặp qua từng phần tử trong array, với mỗi phần tử, gọi hàm callback và truyền vào phần tử đó, 
 * được kết quả bao nhiêu thì push vào array khai báo ở trên
 * - Trả về result array
 */

// function transform(numbers, callback) {
//     // Viết nội dung hàm ở đây
//     var result = [];
//     for(var i = 0; i<numbers.length; i++ ){
//         result.push(callback(numbers[i]));
//     }
//     return result;
// }

// function double(num) {
// // viết code ở đây
//     num += num;
//     return num;
// }

//  console.log(transform([21, 11, 5], double));

/**
 * 1. Viết hàm tripple nhận vào 1 số và trả về số đó nhân 3
 * 2. Viết hàm multiply nhận vào một mảng numbers, 
 * sử dụng map method và hàm tripple để trả về 1 mảng 
 * gồm các phần tử nhân 3 các phần tử trong mảng ban đầu
 */

//  function tripple(num) {
//     // Write code here...
//     num += num + num;
//     return num;
//   }

//   function multiply(numbers) {
//     // Write code here...
//     var a = []
//     numbers.map(function(nums){
//         a.push(tripple(nums));
//     });
//     return a;
//   }
// console.log(multiply([10, 5, 8]));

// ----------Use array map make an array of strings of the names
//Viết hàm trả về 1 mảng chứa tên của các user

// var users = [
//     {
//       name: "Angelina Jolie",
//       age: 80

//     },
//     {
//       name: "Eric Jones",
//       age: 2

//     },
//     {
//       name: "Paris Hilton",
//       age: 5
//     },
//     {
//       name: "Kayne West",
//       age: 16

//     },
//     {
//       name: "Bob Ziroll",
//       age: 100
//     }
//   ]

//   function namesOnly(arr) {
//     // Write code here...
//     var nameArray = []
//     arr.map(function(nameUser){
//         nameArray.push(nameUser.name);
//     });
//     return nameArray;
//   }

//   console.log(namesOnly(users));
// --------Use array map make an array of the names in <h1></h1>, and the ages in <h2></h2>
// Viết hàm trả về mảng chứa phần tử DOM
// const users = [
//     {
//       name: "Angelina Jolie",
//       age: 80

//     },
//     {
//       name: "Eric Jones",
//       age: 2

//     },
//     {
//       name: "Paris Hilton",
//       age: 5

//     },
//     {
//       name: "Kayne West",
//       age: 16

//     },
//     {
//       name: "Bob Ziroll",
//       age: 100

//     }
//   ]

//   function readyToPutInTheDOM(arr) {
//     // Write code here...
//     return arr.map(user => "<h1>"+ user.name +"</h1>"+"<h2>"+ user.age+"</h2>"
//     );
//   }
//   console.log(readyToPutInTheDOM(users));

// ---------Viết hàm trả về mảng chứa phần tử lớn hơn hoặc bằng 5
// Given an array of numbers, return a new array that has only the numbers that are 5 or greater.
// function fiveAndGreaterOnly(arr) {
//     // your code here
//     return arr.filter(function(num){
//         return num >=5 ;
//     })
//   }
// console.log(fiveAndGreaterOnly([3, 6, 8, 2]));

//-----------Viết hàm trả về mảng chỉ chứa số chẵn
// Given an array of numbers, return a new array that only includes the even numbers.
// function evensOnly(arr) {
//     // your code here!
//     return arr.filter(function(num){
//         return num%2 === 0;
//     });
//   }

//-------------Viết hàm lọc ra những học sinh không phải là female
/**
 * Give a list of students, filter out non-female 
 */

//  var members = [
//     { name: 'Lan', gender: 'female' },
//   { name: 'Linh', gender: 'female' },
//   { name: 'Trung', gender: 'male' },
//   { name: 'Peter', gender: 'gay' }
// ];
// function filterOutFemales(members) {
// // your code here!
//     return members.filter(function(mem){
//         return mem.gender !== 'female';
//     });
// }
// console.log(filterOutFemales(members));

// ------------Viết hàm trả về số chẵn đầu tiên trong mảng sử dụng find method
// Nếu không tìm thấy số chẵn nào thì trả về undefined
// function findFirstEvenNumber(array) {
//     // your code here
//     return array.find(function(num){
//         return num % 2 === 0;
//     });
// }

/**
 * viết hàm tìm số chia hết cho x đầu tiên có trong mảng
 * @params {array} array - Mảng các chữ số
 * @params {number} x - Số bị chia
 * Nếu không có trả về undefined
 * Example: 
 * findDivisibleNum([1, 3, 4], 2) => 4
 */

//  function findDivisibleNum(array, x) {
//     // viết code ở đây.
//     return array.find(function(num){
//         return num % x === 0;
//     });
//   }

//----------Đếm tổng số lượt vote trong mảng
// Turn an array of voter objects into a count of how many people voted

// var voters = [
//     {name:'Bob' , age: 30, voted: true},
//     {name:'Jake' , age: 32, voted: true},
//     {name:'Kate' , age: 25, voted: false},
//     {name:'Sam' , age: 20, voted: false},
//     {name:'Phil' , age: 21, voted: true},
//     {name:'Ed' , age:55, voted:true},
//     {name:'Tami' , age: 54, voted:true},
//     {name: 'Mary', age: 31, voted: false},
//     {name: 'Becky', age: 43, voted: false},
//     {name: 'Joey', age: 41, voted: true},
//     {name: 'Jeff', age: 30, voted: true},
//     {name: 'Zack', age: 19, voted: false}
//   ];
  
//   function totalVotes(arr) {
//     // write code here...
//     return arr.reduce(function(count, voter){
//         console.log(count,voter.voted)
//         return count + voter.voted;
//     },0);
//   }
//   console.log(totalVotes(voters));

//---------Tính tổng giá tiền các sản phẩm trong giỏ hàng
// Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once

// var wishlist = [
//     { title: "Tesla Model S", price: 90000 },
//     { title: "4 carat diamond ring", price: 45000 },
//     { title: "Fancy hacky Sack", price: 5 },
//     { title: "Gold fidgit spinner", price: 2000 },
//     { title: "A second Tesla Model S", price: 90000 }
//   ];
  
//   function shoppingSpree(wishlist) {
//     // Write code here...
//     return wishlist.reduce(function(count, prices){
//         return count + prices.price;
//     },0)
//   }

//   console.log(shoppingSpree(wishlist))

//------Viết hàm trả về mảng chứa tên sản các sản phẩm
// Given an array of all your wishlist items, returns an array of titles

// var wishlist = [
//     { title: "Tesla Model S", price: 90000 },
//     { title: "4 carat diamond ring", price: 45000 },
//     { title: "Fancy hacky Sack", price: 5 },
//     { title: "Gold fidgit spinner", price: 2000 },
//     { title: "A second Tesla Model S", price: 90000 }
//   ];
  
//   function arrayTitle(wishlist) {
//     // Write code here...
//     var titleA = []
//     wishlist.reduce(function(titleS, titleW ){
//         return titleA.push(titleW.title);
//     },0);
//     return titleA;
//   }
// console.log(arrayTitle(wishlist));

/* ----------------Filter các sản phẩm khi biết id danh mục sản phẩm
  Ví dụ đây là 1 danh sách các danh mục sản phẩm, 
  khi người dùng muốn lọc các sản phẩm thuộc danh mục nào 
  thì filter các sản phẩm của danh mục đó.
  var categories = [
    { id: 1, name: 'Đồ điện tử'},
    { id: 2, name: 'Đồ gia dụng'},
    { id: 3, name: 'Nội thất'}
  ];
*/

// var listProducts = [
//     {id: 1, categoryId: 1, name: 'Tivi'},
//     {id: 2, categoryId: 1, name: 'Tủ lạnh'},
//     {id: 3, categoryId: 3, name: 'Ghế sofa'},
//     {id: 4, categoryId: 1, name: 'Máy giặt'},
//     {id: 5, categoryId: 2, name: 'Chén bát'},
//     {id: 6, categoryId: 2, name: 'Nồi cơm điện'},
//     {id: 7, categoryId: 3, name: 'Cửa kính'},
//     {id: 8, categoryId: 1, name: 'Điều hoà'},
//     {id: 9, categoryId: 3, name: 'Bàn tròn'},
//     {id: 10, categoryId: 2, name: 'Lò vi sóng'},
//    ]
   
//    function filterProductsByCategoryId(products, categoryId) {
//      // your code here! 
//      return products.filter(function(product){
//          return product.categoryId === categoryId;
//      })
//    }
   /**
 * Viêt hàm có sử dụng method filter để loại bỏ những phần tử bị lặp lại trong mảng:
 * Tìm hiểu thêm indexOf:
 * https://developer.mozilla.org/vi/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
 * Example:
 * removeDuplicate([1, 1, 2, 3, 3]) // [1, 2, 3]
 * 
*/

// function removeDuplicate(array) {
//     // write code here...
//     return array.filter(function(num, index){
//         return array.indexOf(num) === index;
//     });
//   }

//   console.log(removeDuplicate([1, 1, 2, 3, 3]))

//-----------------Viết hàm trải đều các phần tử có trong mảng
// Given an array of arrays, flatten them into a single array

/**
 * Example: 
 * var arrays = [
 *    ["1", "2", "3"],
 *    [true],
 *    [4, 5, 6]
 *  ];
 * 
 * flatten(arrays) // ["1", "2", "3", true, 4, 5, 6];
 */

//  function flatten(arr) {
//     // viết code ở đây.
//     return arr.reduce(function(item1, item2){
//         return item1.concat(item2);

//     },[])
//   }

//   console.log(flatten([["1", "2", "3"], [true], [4, 5, 6] ]))

//------------------Viết hàm đếm số lần xuất hiện của phần tử trong mảng
/**
 * Count the occurrences of each element inside an array using reduce
 * @params {array}
 * @return {object}
 * Example: 
 * countOccurrences(['a', 'b', 'c', 'b', 'a']) // { a: 2, b: 2, c: 1 };
}
*/

// function countOccurrences(arr) {
//     // viết code ở đây.
//     return arr.reduce(function(item1,item2){
//         console.log(item1, item2)
//         item1[item2] = item1[item2] +1 || 1 ;
//         return item1


//     },{})
//   }
//   console.log(countOccurrences(['a', 'b', 'c', 'b', 'a']))


//----------------------//SORT//--------------------------//
// Syntax: Array.sort(function(a, b){}) -> return a sorted array
// if sort function
//   return a value <0
//     a will come before b 
//   return a value >0
//     a will come after b
//   return 0

/**
 * Dữ liệu sinh viên Coders.Tokyo School là một array các object như sau
 * Viết function trả về 1 array gồm 3 người có điểm cao nhất sắp xếp theo thứ tự điểm giảm dần. 
 * Mục đích để hiển thị lên bảng Leaderboard
 * Gợi ý: sử dụng sort và slice
 */
 
//  var students = [
//   { name: 'A', score: 100 },
//   { name: 'B', score: 10 },
//   { name: 'C', score: 101 },
//   { name: 'D', score: 50 },
//   { name: 'E', score: 75 }
// ];

// function getTopStudents(students) {
//   // Write code here...
//   var sortScore =  students.sort(function(a,b){
//     return b.score - a.score;
//   })
//   var sortName = sortScore.map(function(sort){
//     return sort.name;
//   })
//   return sortName.slice(0,3);

// }

// console.log(getTopStudents(students))
