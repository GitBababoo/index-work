const loginForm = document.getElementById('loginForm');
const message = document.getElementById('message');
const forgotPasswordLink = document.getElementById('forgot-password');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  message.textContent = '';

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // ตรวจสอบข้อมูลผู้ใช้
  // ใช้ API หรือ AJAX ส่งข้อมูลไปยัง Server เพื่อตรวจสอบ
  fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: username,
      password: password
    })
  })
  .then(response => {
    if (response.ok) {
      // ล็อกอินสำเร็จ
      // เรียกใช้ function redirect
      message.textContent = 'ล็อกอินสำเร็จ!';
      setTimeout(function() {
        window.location.href = '/home'; // เปลี่ยน /home เป็นหน้าหลักของคุณ
      }, 1500);
    } else {
      return response.json()
      .then(error => {
        // แสดงข้อผิดพลาด
        message.textContent = error.message || 'ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง';
      })
    }
  })
  .catch(error => {
    message.textContent = 'เกิดข้อผิดพลาด';
    console.error(error);
  });
});

forgotPasswordLink.addEventListener('click', () => {
  // เรียกใช้ function เพื่อจัดการการลืมรหัสผ่าน
});