function checkText(){
    var data1 = document.getElementById("list").value;
    var data2 = document.getElementById("amount").value;
    var data3 = document.getElementById("price").value;
    
    if(data1 == ""){
        alert("กรุณากรอกรายการ")
    }else if(data2 == ""){
        alert("กรุณากรอกจำนวน")
    }else if(data3 == ""){
        alert("กรุณากรอกราคา")
    }else{
        alert("เพิ่มรายการสำเร็จ")
    }
}