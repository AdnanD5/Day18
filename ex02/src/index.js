//Only change code below this line
function* myGenerator(){
yield insideGenerator1
yield insideGenerator2
yield insideGenerator3
}
function* insideGenerator1(){
    var x
    for(i=0, i<6, i++){
        
        yield x
    }

}
function* insideGenerator2(){
    
}
function* insideGenerator3(){
    
}
var fifteenArray = [];
//Only change code above this line
module.exports = {fifteenArray, myGenerator}