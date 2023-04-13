// operation on string
// 1. Iteration like for..of 

const colors=["blue","green","white"]

for (const color of colors){
    console.log(color)       //"blue","green","white"
}


// for in loop

for (const num in colors){
    console.log(num)         //0,1,2
}

// for each

colors.forEach(function callback(value, index) {
  console.log(value, index);
});
// 'blue', 0
// 'green', 1
// 'white', 2