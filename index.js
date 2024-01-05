// ------Bài tập 1-------------
/*
1. Input: DOM tới các thẻ lấy giá trị: Lương một ngày, Số ngày làm 
2. Xử lý: Lương: Lương 1 ngày * số ngày làm
3. In ra kết quả: tiền lương nhân viên
*/
document.getElementById('ketQua1').onclick = function () {
  //   console.log('check');
  var luongMotNgay = document.getElementById('luongMotNgay').value * 1;
  //   console.log(luongMotNgay);
  var soNgayLam = document.getElementById('soNgayLam').value * 1;
  //   console.log(soNgayLam);
  // Xử lý
  var ketQua1 = luongMotNgay * soNgayLam;
  var formatLuong = ketQua1.toLocaleString({
    style: 'currency',
    currency: 'VND',
  });
  document.getElementById(
    'luong'
  ).innerHTML = `Tổng tiền lương của bạn là: ${formatLuong} VND`;
};

// --------Bài tập 2---------
/*
  1. Input: DOM tới các thẻ input lấy giá trị người dùng nhập (number)
  2. Xử lý: (num1 + num2 + num3 + num4 + num5) /5
  3. In kết quả: Giá trị trung bình 5 số
*/
document.getElementById('btnBai2').onclick = function () {
  var num1 = document.getElementById('num1').value * 1;
  var num2 = document.getElementById('num2').value * 1;
  var num3 = document.getElementById('num3').value * 1;
  var num4 = document.getElementById('num4').value * 1;
  var num5 = document.getElementById('num5').value * 1;

  var total = Math.floor((num1 + num2 + num3 + num4 + num5) / 5);
  document.getElementById('ketQua2').innerHTML = `Kết quả: ${total}`;
};

// ------------Bài tập 3---------
/*
  1. Input: DOM tới thẻ input lấy số tiền người dùng nhập
  2. Xử lý: số tiền * 23500
  3. In kết quả: Kết quả quy đổi VND
*/
document.getElementById('btnBai3').onclick = function () {
  var money = document.getElementById('money').value * 1;
  // console.log(money);
  var quyDoi = money * 23500;
  var formatMoney = quyDoi.toLocaleString({
    style: 'currency',
    currency: 'VND',
  });
  document.getElementById(
    'ketQua3'
  ).innerHTML = `kết quả là: ${formatMoney} VND`;
};

// -------Bài tập 4-----------
/*
 1. Input: DOM tới các thẻ input lấy giá trị chiều dài, chiều rộng
 2. Xử lý: 
 Diện tích: chiều dài * chiều rộng
 Chu vi: (dài + rông)*2
 3. In kết quả: Diện tích, chu vi hình chữ nhật
*/

document.getElementById('btnBai4').onclick = function () {
  var chieuDai = document.getElementById('chieuDai').value * 1;
  var chieuRong = document.getElementById('chieuRong').value * 1;
  var dienTich = chieuDai * chieuRong;
  var chuVi = (chieuDai + chieuRong) * 2;
  document.getElementById(
    'ketQua4'
  ).innerHTML = `Diện tích: ${dienTich} chu vi: ${chuVi}`;
};

// -------Bài tập 5-----------
/*
 1. Input: DOM tới thẻ input lấy giá trị người dùng nhập 2 chữ số
 2. Xử lý: 
  soDonVi = soN % 10
  soHangChuc = soN / 10
  tong = soDonVi + soHangChuc
 3. In kết quả: Tổng hai ký số
*/
document.getElementById('btnBai5').onclick = function () {
  var soN = document.getElementById('soN').value * 1;
  var soDonVi = soN % 10;
  // console.log(soDonVi);
  var soHangChuc = Math.floor(soN / 10);
  // console.log(soHangChuc);
  var tong = soHangChuc + soDonVi;
  document.getElementById('ketQua5').innerHTML = `Tổng 2 ký số là: ${tong}`;
};
