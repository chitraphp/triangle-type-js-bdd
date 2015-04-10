var wordOrder = function(input) {
    var input_array = input.split(" ");
    var count_object = {};
    var count = 1;
    var key = input_array[0];
    count_object[key]= count;
    alert(count_object);


    for (var i= 0;i< input_array.length; i++){

         key = input_array.shift();
        alert(input_array);
        if (input_array.length >= 1){
            for (var j= 0;j< input_array.length; j++){
                if (key == input_array[j]){

                    count = count + 1;
                    count_object[key]= count;
                    alert(count_object);
                    var index = input_array.indexOf(input_array[j]);
                    //alert(index);
                    input_array.splice(index,1);
                }
                else {
                    alert(3);
                    count_object[key]= count;
                    alert(count_object.aa);

                }
            }



        } else {
            count_object[key]= count;
        }
    }
    return count_object;


}
