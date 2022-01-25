
function toCelsius(f){
    var result = (f-32) * (5/9);
    return result;
};

function toFarenheit(c){
    var result = (c * 9/5) + 32;
    return result;
};



document.getElementById("atcelc").onclick = function(){
    var ree = document.getElementById("celsius").value;
    result = toCelsius(ree);
    var fixedNum = parseFloat(result).toFixed( 3 );
    console.log(fixedNum)
    alert(fixedNum)
}

document.getElementById("farenbutton").onclick = function(){
    var ree = document.getElementById("Farenheit").value;
    result = toFarenheit(ree);
    var fixedNum = parseFloat(result).toFixed( 3 );
    console.log(fixedNum)
    alert(fixedNum)
}
