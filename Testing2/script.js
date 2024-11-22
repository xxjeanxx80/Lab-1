// Xử lý sự kiện keydown
document.getElementById('c_value').addEventListener('keydown', function(event) {
    document.getElementById('result1').innerText = 'keydown: ' + event.key;
});

// Xử lý sự kiện keypress
document.getElementById('c_value').addEventListener('keypress', function(event) {
    document.getElementById('result1').innerText = 'keypress: ' + event.key;
});

// Xử lý sự kiện keyup
document.getElementById('c_value').addEventListener('keyup', function(event) {
    document.getElementById('result1').innerText = 'keyup: ' + event.key;
});

// Hàm tính toán khi nhấn nút (để kiểm tra thêm tính năng)
function calculate() {
    let value = document.getElementById('c_value').value;
    alert("Giá trị bạn nhập là: " + value);
}
