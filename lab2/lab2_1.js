//задача 1.1
function printName(text){
    return text;
}
//задача 1.2
function sum(elems){
    var sum = 0;
    elems.forEach(element => {
        sum+= element
    });
    return sum
}
//задача 1.3

function square(arr){
    arr.forEach((item, i) =>{
        if (typeof(item) == 'number'){
            arr[i] *= arr[i];
        }else {
            arr[i] = 0;
        }
    });
    return arr;
}
  

console.log( "Задача 2.1\n" + printName("hgvhggvhgvhgvgvhvhgvgvvgvhgvg"));
console.log("Задача 2.2\n" + sum([3,2,1]));
console.log("Задача 2.3\n" + square([3,2,1,'a']));