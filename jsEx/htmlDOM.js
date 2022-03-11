//HTML DOM

//1. Element: ID, class, tag name, CSS selector, HTML collection

//2. Attribute

//3. Text

// --- Do id chỉ có một nên chỉ lấy được 1:
// var headingNode = document.getElementById('heading');
// console.log(headingNode);
//--- Kết quả trả về là nguyên cái thẻ <h1 id="heading">HTML DOM</h1> 
// Và nguyên cái thẻ thẻ trên là Object, nó mô tả headingNode là 1 cái node
//---- Để có thể nhìn rõ được thì phải đưa headingNode vào 1 cái mảng hoặc 1 object

// console.log({
//     element: headingNode
// })


//--- Class, tagName khi được lấy sẽ có kết quả trả về tương tự 1 mảng, ta có thể sử dụng vòng lặp để duyệt qua từng phần tử.
// var headingNodes = document.getElementsByClassName('headings');
// console.log(headingNodes);

// --- TagName nó sẽ tìm tất cả các phần tử là thẻ h1 để trả về 1 kết quả là 1 mảng các phần tử thẻ h1
// var headingNodes = document.getElementsByTagName('h1');
// console.log(headingNodes);


//--- Tìm các phần tử qua bộ chọn CSS Selectors
// var headingNode = document.querySelector('.headings');
// console.log(headingNode);
// ===> Tuy có rất nhiều thẻ h1 có className là headings nhưng khi trả về kết quả, querySelector chỉ trả về thằng đầu tiên

//--- Nếu như muốn tiềm kiếm tất cả các phần tử có selector là .headings
var headingNode = document.querySelectorAll('.headings');
console.log(headingNode);
// ==> Thay vì trả về một HTML collection như getElementByClassName, getElementByTagName 
// thì querySelecoprAll() lại trả về một Nodelist

