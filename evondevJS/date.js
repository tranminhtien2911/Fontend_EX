// const newDate = new Date();
// console.log(newDate);
// ------------- 4 cách tạo Date Object
//--- Cách 1
const newDate = new Date();
console.log(newDate);

//Đoạn này để lấy timestamp
console.log(newDate.getTime()); //->1647781957246

//--- Cách 2: new Date(timestamp)
console.log(new Date(1647781957246)); //->Sun Mar 20 2022 20:12:37 GMT+0700 (Giờ Đông Dương)

//--- Cách 3: new Date(date string) -> chuỗi hợp lệ về ngày tháng năm 
// Để lấy nhưng thông tin ngắn về ngày giờ không cần quá chi tiết
console.log(newDate.toDateString());//-> Sun Mar 20 2022
console.log(newDate.toTimeString()); //-> 20:43:32 GMT+0700 (Giờ Đông Dương)
console.log(newDate.toLocaleDateString());//-> 20/3/2022
// Để chuyển đổi h đúng với cách sắp xếp ngày thánh năm của Việt Nam
console.log(newDate.toLocaleDateString("vi-VI"));//-> 20/3/2022
console.log(newDate.toISOString()); //-> 2022-03-20T13:48:41.646Z

//--- Cách 4: new Date( year, month, day, hours, minutes, second, milisecond)
//Do thánh bắt đầu từ số 0 nên month = 3 cho ra là tháng 4
console.log(new Date(2022, 3, 2, 1, 23, 23, 23, 23))

/**
 * 
 * Các hàm get trong Date
 * 
 */
const birthday = new Date(1999, 10, 29);
// Lấy ra năm (getFullYear())
console.log(birthday.getFullYear()); //-> 1999

// Lấy ra tháng (getMonth): nó sẽ chạy từ 0 đến 11 tương ứng với 12 tháng trong năm
console.log(birthday.getMonth()+1);// -> 11

// Lấy ra ngày của tháng (getDate) 1->31
console.log(birthday.getDate()) //->29

// In ra thứ của tuần
// 0 -> 6 - | 0 là chủ nhật | 6 là thứ 7
console.log(birthday.getDay());

// In ra giờ
console.log(birthday.getHours());

//In ra phút
console.log(birthday.getMinutes());

//In ra giây
console.log(birthday.getSeconds());

/**
 * 
 * setTimeout và setInterval
 * setTimeout : Có nghĩa là mình sẽ xét một cái khoảng thời gian nhất định 
 *              (sau bao lâu nó sẽ làm 1 việc gì đó)
 * setInterval :  Sẽ chạy liên tục
 */

// setTimeout(function(){
//     alert("call me 3 seconds")
// }, 1000);

// Sau 1 giây thì sẽ hiện lên bảng thông báo

// setInterval(function(){
//     console.log("Hello JS");
// }, 2000);

//Để làm sạch chúng ta có thể dùng clearInterval để bao setInterval lại
//Cách 1 :
// clearInterval(
//     setInterval(function () {
//         console.log("Hello JS");
//     }, 2000)
// );

// Cách 2:
// const timer = setInterval(function () {
//     console.log("Hello JS");
// }, 2000);

// clearInterval(timer);
//-----> Mục đích là để dừng đồng hồ, thời gian đếm giây

/**
 * Bài tập 
 * 1. Viết chương trình nhập vào năm sinh và in ra số tuổi
 * 
 * 2. Viết chương trình đếm ngược thời gian theo từng giây (countdown) dựa và thời gian đầu vào.
 * Ví dụ: Thời gian làm bài là 30 phút nếu chạy về 0 thì thông báo đã hết thời gian.
 * 
 * 3. Viết chương tình có tên là timeSince, đầu vào là thời gian và tính thời gian đầu vào
 * so với thời gian hiện tại, ví dụ: bạn đang chat với 1 bạn A, sau đó ban A offline và sau đó
 * vài phút thì hiển thị bạn A vừa online `3 phút trước`, `2 tháng trước`, `30 giây trước`, `1 năm trước`.
 * 
 */

//Bài 1
function getAge(year){
    const current = new Date().getFullYear();
    const age = current - year;
    return ` Tuổi của bạn là: ${age} `;
}
// console.log(getAge(1999))


// Bài 2
function countdown(minutes = 1){
    // Đổi 30 phút ra giây
    let second = minutes * 60;
    let counter  = 0 ;
    const timer = setInterval(function(){
        counter += 1;
        console.log(counter);
        if (counter === second){
            clearInterval(timer);
            console.log("Your time is end!");
        }
    }, 1000);


}
// console.log(countdown(1))

// Bài 3
function timeSince(time){
    //current time - time
    const now = new Date();
    const yourDate = new Date(time);
    //getTime trả về mili giây
    const seconds = Math.floor((now.getTime() - yourDate.getTime())/1000);// in ra số giây
    
    let timer = seconds / 31536000;
    if (timer > 1){
        console.log(`${Math.floor(timer)} năm trước`);
        return;
    }

    timer = seconds / 2678400;
    if (timer > 1){
        console.log(`${Math.floor(timer)} tháng trước`);
        return;
    }

    timer = seconds / 604800;
    if (timer > 1){
        console.log(`${Math.floor(timer)} tuần trước`);
        return;
    }

    timer = seconds / 86400;
    if (timer > 1){
        console.log(`${Math.floor(timer)} ngày trước`);
        return;
    }

    timer = seconds / 3600;
    if (timer > 1){
        console.log(`${Math.floor(timer)} giờ trước`);
        return;
    }
    
    timer = seconds / 60;
    if (timer > 1){
        console.log(`${Math.floor(timer)}  phút trước`);
        return;
    }

    timer = seconds;
    if (timer > 1){
        console.log(`${Math.floor(timer)}  giây trước`);
        return;
    }
}
// 1 năm = 365 * 24 * 60 * 60 =  31536000 / số giây trên 1 năm 
// 1 tháng = 31 * 24 * 60 * 60 = 2678400 / số giây trên 1 tháng
// 1 tuần = 7 * 24 * 60 * 60 = 604800 / số giây trên 1 tuần
// 1 ngày = 24 * 60 * 60 = 86400 / số giây trên 1 ngày
// 1 giờ = 1 * 60 * 60 = 3600
// 1 phút = 1 * 60 = 60
timeSince("on Mar 21 2022 01:10:22 GMT+0700 (Giờ Đông Dương)");



