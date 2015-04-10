var triangleType = function(x,y,z) {

    var types = ["isosceles","scalene","equilateral"];

    if((x+y > z) && (y+z > x) && (x+z > y)){

        if ((x === y) && (y === z)) {
            return types[2];
        }
        else if ((x === y) || (y === z) || (x === z)) {
            return types[0];
        }
        else{
            return types[1];
        }

    }
    else{
        return false;

    }


};

$(document).ready(function(){
    debugger;
    $("#triangle-type").submit(function(event) {
        var input1 = parseInt($("#first").val());
        var input2 = parseInt($("#second").val());
        var input3 = parseInt($("#third").val());
        var result = triangleType(input1,input2,input3);
        $("#type").text(result);
        $("#result").show();

        event.preventDefault();
    });
});
