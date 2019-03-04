function checkCorrect() {
    if (checkNull() == 0) {
        alert("กรุณากรอกข้อมูลให้ครบ")
    } else if (checkEmployeeID() == 0) {
        alert("รหัสพนักงานต้องเป็นตัวเลขเท่านั้นและความยาวไม่เกิน 10 ตัวอักษร") 
    } else if (checkEmployeePassword() == 0) {
        alert("รหัสผ่านต้องมีความยาวมากกว่าหรือเท่ากับ 8 ตัวอักษร") 
    } else if (checkFname() == 0) {
        alert("ชื่อต้องเป็นตัวอักษรเท่านั้น")
    } else if (checkLname() == 0) {
        alert("นามสกุลต้องเป็นตัวอักษรเท่านั้น")
    } else if (checkRace() == 0) {
        alert("เชื้อชาติต้องเป็นตัวอักษรเท่านั้น")
    } else if (checkNationality() == 0) {
        alert("สัญชาติต้องเป็นตัวอักษรเท่านั้น")
    } else if (checkTelnumber() == 0) {
        alert("เบอร์ติดต่อต้องเป็นตัวเลขเท่านั้นและความยาวไม่เกิน 10 ตัวอักษร)")
    } else if (checkEmail() == 0) {
        alert("กรุณากรอกอีเมลให้ถูกต้อง")  
    } else {
        
        alert("กรอกข้อมูลสำเร็จ")
        location.href('./login.html')
    }
}

function checkEmail() {
    var emp_email = document.getElementById("EMP_email").value;
    var validate = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if (validate.test(String(emp_email).toLowerCase())) {
        return 1;
    } else {
        document.getElementById('EMP_email').value = "";
        return 0;
    }
}

function checkTelnumber() {
    var emp_telnumber = document.getElementById("EMP_tel").value;

    if (emp_telnumber != parseInt(emp_telnumber) || emp_telnumber > 10) {
        document.getElementById('EMP_tel').value = "";
        return 0;
    } else {
        return 1;
    }
}

function checkNationality() {
    var emp_nationality = document.getElementById("EMP_nationality").value;

    if (isNaN(emp_nationality)) {
        return 1;
    } else {
        document.getElementById('EMP_nationality').value = "";
        return 0;
    }
}

function checkRace() {
    var emp_race = document.getElementById("EMP_race").value;

    if (isNaN(emp_race)) {
        return 1;
    } else {
        document.getElementById('EMP_race').value = "";
        return 0;
    }
}

function checkLname() {
    var emp_lname = document.getElementById("EMP_lname").value;

    if (isNaN(emp_lname)) {
        return 1;
    } else {
        document.getElementById('EMP_lname').value = "";
        return 0;
    }
}

function checkFname() {
    var emp_fname = document.getElementById("EMP_fname").value;

    if (isNaN(emp_fname)) {
        return 1;
    } else {
        document.getElementById('EMP_fname').value = "";
        return 0;
    }
}

function checkEmployeePassword() {
    var emp_password = document.getElementById("EMP_password").value;
    
    if (emp_password.length < 8) {
        document.getElementById('EMP_password').value = "";
        return 0;
    } else {
        return 1;
    }
}

function checkEmployeeID() {
    var emp_id = document.getElementById("EMP_ID").value;
    
    if (emp_id != parseInt(emp_id) || emp_id > 10) {
        document.getElementById('EMP_ID').value = "";
        return 0;
    } else {
        return 1;
    }
}

function checkNull() {
    var emp_id = document.getElementById("EMP_ID").value;
    var emp_fname = document.getElementById("EMP_fname").value;
    var emp_lname = document.getElementById("EMP_lname").value;
    var emp_bday = document.getElementById("EMP_bday").value;
    var emp_bmonth = document.getElementById("EMP_bmonth").value;
    var emp_byear = document.getElementById("EMP_byear").value;
    var emp_gender = document.getElementById("EMP_gender").value;
    var emp_race = document.getElementById("EMP_race").value;
    var emp_nationality = document.getElementById("EMP_nationality").value;
    var emp_type = document.getElementById("EMP_type").value;
    var emp_address = document.getElementById("EMP_address").value;
    var emp_telnumber = document.getElementById("EMP_tel").value;
    var emp_email = document.getElementById("EMP_email").value;
    var emp_password = document.getElementById("EMP_password").value;
    
    if (emp_id == "" || emp_password == "" || emp_fname == "" || emp_lname == "" || emp_bday == "วัน" ||
        emp_bmonth == "เดือน" || emp_byear == "ปี" || emp_gender == "เพศ" || 
        emp_race == "" || emp_nationality == "" || emp_type == "ตำแหน่ง" ||
        emp_address == "" || emp_telnumber == "" || emp_email == "") {
        return 0;
    } else {
        return 1;
    }
}