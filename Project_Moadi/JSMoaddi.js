function sheckEmail(){

   
    var getemail=(document.getElementById("email").value.length);

    if(getemail==0)
       document.getElementById("msgWrong").style.display="block";
    else
    document.getElementById("msgWrong").style.display="none";  
    }


function showOffer(){
    alert("مرحبا بك ....هذه هي اسعارنا ");
}

function joinUs(){
   
    var win;
    win = window.open('window1.html','_blank');
    win.resizeTo(500,500);
    
   /*do{
       var Fname= prompt("ادخل الاسم الاول");
       var reg = /^[a-z].[a-z]$/i;
       var tesR = reg.test(Fname);
   }while(tesR==false)

   do{
    var Email = prompt("ادخل الايميل");
    var regE = /^[A-Za-z]{3,}([A-Za-z]|[0-9])\@[A-Za-z]{2,}(.com)/i;
    var tesT = regE.test(Email);
   }while(tesT==false)*/
}

