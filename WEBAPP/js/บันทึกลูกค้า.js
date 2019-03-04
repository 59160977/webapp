function checknull () {
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var birth = document.getElementById("birth").value;
    var sex = document.getElementById("sex").value;
    var home = document.getElementById("home").value;
    var tel = document.getElementById("tel").value;
    var email = document.getElementById("email").value;
    var typecos = document.getElementById("typecos").value;

    
    if(fname == ""  ){
        alert("กรุณากรอกชื่อ");
    }else if(lname == ""){
        alert("กรุณากรอกนามสกุล");
       
    }else if(birth =="" ){
        alert("กรุณากรอกวันเกิด");
    }else if(sex ==""){
        alert("กรุณากรอกเพศ");
    }else if(home==""){
        alert("กรุณากรอกที่อยู่");
    }else if(tel==""){
        alert("กรุณากรอกเบอร์โทรศัพท์");
    }else if(email==""){
        alert("กรุณากรอกข้อมูลให้ครบ");
    }else if(typecos==""){
        alert("กรุณากรอกข้อมูลให้ครบ");
    }else{
        alert("บันทึกข้อมูลสำเร็จ");
        location.href('./ข้อมูลการซื้อรถ.html')
    }
}