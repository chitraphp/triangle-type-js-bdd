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
