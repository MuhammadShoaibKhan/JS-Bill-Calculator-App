function Sum(){


    var nnum1 = 0;
    var nnum2 = 0;
    var nnum3 = 0;
    var nres = 0;


    nnum1=document.getElementById("bana").value *200;
    nnum2=document.getElementById("mango").value *150;
    nnum3=document.getElementById("orange").value *350;
 
    nres = nnum1 + nnum2 + nnum3;

 //   console.log(nres);

    
    document.getElementsByName('output')[0].value= nres;

}