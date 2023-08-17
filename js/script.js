function validate() {
  
    var user = document.getElementById("e").value;
    var user2 = document.getElementById("e");
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (re.test(user)) {
        alert("done");
        return true;
    }
    else{
        user2.style.border = "red solid 3px";
        return false;
    }
}

document.getElementById("Hitung").onclick = function kel(){
    var s1;
    var s2;
    var s3;
    var h;


    var s1 =document.getElementById("sisi a-input").value;
    var s2 =document.getElementById("sisi b-input").value;
    var s3 =document.getElementById("sisi c-input").value;

    var h= parseInt(s1)+parseInt(s2)+parseInt(s3);
    console.log(h)
    document.getElementById("clabel").innerHTML='Keliling Segitiga adalah: '+ h ;
}

document.getElementById("hitung").onclick = function Luas(){
    var a;
    var b;
    var c;

    var a =document.getElementById("alas-input").value;
    var b =document.getElementById("tinggi-input").value;

    var c= 1/2*parseInt(a)*parseInt(b);
    console.log(c)
    document.getElementById("Luaslabel").innerHTML='Luas Segitiga adalah: '+ c;
}

