function SearchtableForm() {
    var x = document.forms["myForm1"]["searchtable"].value;
    if (x == "") {
      alert("กรุณากรอกข้อความ");
      return false;
    }else if(x.length < 3){
        alert("กรุณากรอกข้อความให้ถูกต้อง");
        return false;
      }
  }
  function AdddataForm() {

      
    var tmp_date = document.getElementById("date").value;
    var tmp_number = document.getElementById("number").value;
    var tmp_version = document.getElementById("version").value;
    var tmp_price = document.getElementById("price").value;
    var tmp_color = document.getElementById("color").value;
    var tmp_quantity = document.getElementById("quantity").value;

    if (tmp_date == "" ||tmp_number == "" || tmp_version == "" ||tmp_price == "" || tmp_color == "" ||tmp_quantity == "" ) {
     alert("กรุณากรอกข้อความให้ครบทุกช่อง")
      return false;
    }else if(tmp_number.length < 17 ||tmp_number.length > 17 || tmp_number == ""){
        alert("กรุณากรอก เลขตัวถัง ให้ถูกต้อง");
        return false;
      }else if(!tmp_number.match(/^([a-z0-9])+$/i)){
        alert("กรอก เลขตัวถัง ได้เฉพาะตัวเลขและตัวอักษรภาษาอังกฤษให้ครบ 17 ตัวอักษรเท่านั้น");
        return false;
      }else if(tmp_version.length <4 || tmp_version == ""){
        alert("กรุณากรอก รุ่น ให้ถูกต้อง");
        return false;
      }else if(!tmp_version.match(/^([a-z0-9])+$/i)){
        alert("กรอก รุ่น ได้เฉพาะตัวเลขและตัวอักษรภาษาอังกฤษเท่านั้น");
        return false;
      }else if(tmp_price == ""){
        alert("กรุณากรอก ราคา ให้ถูกต้อง");
        return false;
      }else if(tmp_price !=parseInt(tmp_price)){
        alert("กรอก ราคา ได้เฉพาะตัวเลขเท่านั้น");
        return false;
      }else if(tmp_color == ""){
        alert("กรอก สี ให้ถูกต้อง");
        return false;
      }else if(tmp_date == ""){
        alert("กรอก ว/ ด/ป ให้ถูกต้อง");
        return false;
      }else if(tmp_quantity == ""){
        alert("กรอก จำนวน ให้ถูกต้อง");
        return false;
      }else if(tmp_quantity != parseInt(tmp_quantity)){
        alert("กรอก จำนวน ได้เฉพาะตัวเลขเท่านั้น");
        return false;
      }else{
        alert("เพิ่มข้อมูลเรียบร้อย");
        return false;
      }
  }

 