
// function inputmethod(count1){
//     var p=document.getElementById('price');

//     var q=document.getElementById('quantity');
//     var d=document.getElementById('discount');
//     var g=document.getElementById('gst');

//     var t=document.getElementById('total');
    
//      var t=p*q;



// }



  function  getPrice() {
    var pVal1 = Number(document.getElementById("price").value);
    
    var qVal3 = Number(document.getElementById("qty").value);

    var dVal2 = Number(document.getElementById("discount").value) / 100;
    var dVal4 = Number(document.getElementById("gst").value) / 100;

    var totalValue = (pVal1*qVal3);
    totalValue= totalValue- (totalValue * dVal2);
    totalValue= totalValue + (totalValue * dVal4);

        document.getElementById("total").value = totalValue;
}