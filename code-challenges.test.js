// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

describe("shuffler", () => {
  const colors1 = ["purple", "blue", "green", "yellow", "pink"];
  // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
  const colors2 = [
    "chartreuse",
    "indigo",
    "periwinkle",
    "ochre",
    "aquamarine",
    "saffron",
  ];
  //   // Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

  it("take in an array, removes the first item from the array and shuffles the remaining content.", () => {
    expect(shuffler(colors1)).toEqual(
      expect.arrayContaining(["yellow", "blue", "pink", "green"])
    );
    expect(shuffler(colors2)).toEqual(
      expect.arrayContaining([
        "saffron",
        "aquamarine",
        "periwinkle",
        "indigo",
        "ochre",
      ])
    );
  });
});

// ● shuffler › take in an array, removes the first item from the array and shuffles the remaining content.

//   ReferenceError: shuffler is not defined

// // b) Create the function that makes the test pass.

// Pseudocode:
// Create and name a function
// Use a built-in method .shift to call out the first value of the array
// Create 3 variables for index postion to equal array's length, placeholder and for random number generator
// Use while loop as long as array exist
// Generate random array position as logic
// Declare index to subtract 1 of the given array variables
// Create a logic that prevents picking the same given array variables
// Return array to generate random array value
// Therefore removes the first item from the array and shuffles the remaining content.

function shuffler(array) {
  array.shift();
  var i = array.length;
  var arr1;
  var randomNum;
  while (0 !== i) {
    randomNum = Math.floor(Math.random() * i);
    i -= 1;
    arr1 = array[i];
    array[i] = array[randomNum];
    array[randomNum] = arr1;
  }
  return array;
}

// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.

describe("biggieSmalls", () => {
  const nums1 = [3, 56, 90, -8, 0, 23, 6];
  // Expected output: [-8, 90]
  const nums2 = [109, 5, 9, 67, 8, 24];
  // Expected output: [5, 109]

  it("take an array of numbers and returns an array of the minimum and maximum numbers in that order.", () => {
    expect(biggieSmalls(nums1)).toEqual([-8, 90]);
    expect(biggieSmalls(nums2)).toEqual([5, 109]);
  });
});

// ● biggieSmalls › take an array of numbers and returns an array of the minimum and maximum numbers in that order.

//   ReferenceError: biggieSmalls is not defined

// b) Create the function that makes the test pass.

// Pseudocode:
// Create and name a function
// I intially tried a for loop to iterate and use .sort to sort out lowest to highest, then use .splice to obtain the first and last index but i couldn't figure out how to obtain the same first and last of both given output because they have diffenet amout of values in their array
// I scratched the idea and found in google that you can use Math.min & Math.max if you put "..." after referencing the array in function in the method parethesis to allow you to access arrays, because this type of built-in-method doesn't usually take in arrays
// Create and name an empty container for the new output to match the given expected output
// Call out the new empty container name for new value to be contained along with built-in-method .push, then referencing in the method parenthesis, the buil-in method .min and then the same process with .max after the next line
// Return the new container name to call out the new values that was just stored which are the smallest and biggest numbers of both given arrays separately.
// Therefore creating a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

const biggieSmalls = (array) => {
  let biggie = Math.max(...array);
  let smalls = Math.min(...array);
  let notoBig = [];

  notoBig.push(smalls);
  notoBig.push(biggie);

  return notoBig;
};

// // --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

describe("uniqueOrn", (arrays) => {
  const testArray1 = [3, 7, 10, 5, 4, 3, 3];
  const testArray2 = [7, 8, 2, 3, 1, 5, 4];
  // Expected output: [3, 7, 10, 5, 4, 8, 2, 1]

  it("takes in two arrays as arguments and returns one array with no duplicate values.", () => {
    expect(uniqueOrn(testArray1, testArray2)).toEqual([
      3, 7, 10, 5, 4, 8, 2, 1,
    ]);
  });
});

//  ● uniqueOrn › takes in two arrays as arguments and returns one array with no duplicate values.

//     ReferenceError: uniqueOrn is not defined

//     ReferenceError: uniquely is not defined

// b) Create the function that makes the test pass.

// Pseudocode:
// Create and name a function using a spread syntax in the parenthesis to allow the array parameter to be expanded where the elements to be expanded are expected
// Creat a variable that destructures both arrays into one array
// Create an empty array to pass down outputs
// Use a for loop
// Create a variable that contains a data referencing the variable parameters that have spread syntax and use the index value to start looping through with the spread operator
// Create a variable that calls out the first index of the new varible name that's created to contain both given input arrays in one array with the spread operators
// Use a conditional statement by calling the new variable name and say that if i is strictly equals to 0 then start going through the first index value of the new array containing both of the given arrays in order
// Then use the .push built-in method to store the new individual output by calling out the variable name that joined both given arrays with the spread syntax at the end with idex as a parameter to make it go right after another then into the new empty array container after taking in both arrays to return as one single array.
// Use an else statement to say another condition
// Create and name a new variable for the new array container with a built-in method .filter() that holds the data of the empty array
// Create and name a new variable saying to filter out the new empty array's new values and then use a Higher Order Function .filter() that takes an anonymous function to pass in an arguement in return
//Use another conditional statement that says if the empty array new values strictly equals to 0 then push because that means there's no duplicates and return empty container array matching the expected output.
// Therefore taking in two arrays as arguments and returns one array with no duplicate values.

const uniqueOrn = (...arrays) => {
  var magic = [...arrays[0], ...arrays[1]];
  var pegaSus = [];
  for (var i = 0; i < magic.length; i++) {
    var myth = magic[i];
    if (i === 0) {
      pegaSus.push(myth);
    } else {
      var flyingHorses = pegaSus.filter((hayyy) => {
        return hayyy === myth;
      });
      if (flyingHorses.length === 0) {
        pegaSus.push(myth);
      }
    }
  }
  return pegaSus;
};
