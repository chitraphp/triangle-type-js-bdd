var wordOrder = function(input) {

    var input_array = input.split(" ");
    //alert(input_array);
    var count_object = {};
    var other = [];
    var count = 0;
    do {
        debugger;


        for(var j=0;j<input_array.length;j++){
            var key = input_array[0];
            if(key === input_array[j]){

                //alert(key);
                count++;
                count_object[key]= count;


                //alert(input_array);
            }
            else{


                other.push(input_array[j]);
                //alert(other);



            }
            // input_array.splice(index2,1);
            // input_array.splice(index1,1);
        }

        input_array = other;
        //alert(input_array);

    }
    while (input_array.length !== 0);

    return count_object;
};
