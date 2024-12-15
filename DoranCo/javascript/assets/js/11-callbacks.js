/* ----------------------- FUNCTIONS - ARRAYS -----------------------*/

//* A Callback (fr: fonction de rappel) is a function made into a parameter of another function

function display(callback) {
    callback() //This function is called by the display function
}

const greet = function(){
    console.log("hello, world");
}

display(greet)

display(function(){
    console.log(25+75);
})



// function add
const add = function (x, y) {
  return x + y;
};

// function divide
const divide = function (x, y) {
  return x / y;
};

// function multiply
const multiply = function (x, y) {
  return x * y;
};

function mathematique(x, y, callback) {
  return callback(x, y);
}

const res = mathematique(12, 89, function (a, t) {
  return a * 5 + t * 9;
});
console.log(res);

// Une fonction peut prendre en parametre une autre fonction
// cela permet de rendre personnalisable
function display(callback) {
  callback();
}

const hello = function () {
  console.log('salut tout le monde');
};

display(hello);

display(function () {
  console.log(23 + 67);
});



const months = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
  ];

  const displayArray = function(string) {
    console.log(string);
  }

  function forEachPerso(array, callback){
    for (let i = 0; i < array.length; i++) {
        callback(array[i])
    }
  }

//   forEachPerso(months, displayArray(" is cool"))







