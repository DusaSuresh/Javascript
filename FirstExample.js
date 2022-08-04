console.log("Om Sai Baba");

var arr = ['a','b','d','a','r','s','b','a','s','u','s','r'];

var finalObj = {}

arr.forEach(element => {
    finalObj[element] = (finalObj[element] || 0) + 1
    return finalObj;
});

console.log(finalObj);
