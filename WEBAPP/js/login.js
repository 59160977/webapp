function checklogin(){
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    if(username == ""){
        alert('กรุณากรอก username');
    }else if(password == ""){
        alert('กรุณากรอก password');
    }else{
        // เช็ค username กับ password ว่ามีในระบบไหม
        if(username != "usertest"){
            alert('username ไม่มีในระบบ');
        }else if(password != "test1234"){
            alert('password ไม่ถูกต้อง');
        }else{
            alert('login สำเร็จ');
            location.href('หน้าหลัก.html')
        }
    }
}