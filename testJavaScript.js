const uniqueOrn = (...arrays) => {
  var arr = [...arrays[0], ...arrays[1]];
  var newArr = [];
  var mapObj = {};
  for (var i = 0; i < arr.length; i++) {
    var el = arr[i];
    if (!mapObj[el]) {
      mapObj[el] = el;
      newArr.push(el);
    }
  }
  return newArr;
};

const uniqueOrn2 = (...arrays) => {
  var arr = [...arrays[0], ...arrays[1]];
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    var el = arr[i];
    if (i == 0) {
      newArr.push(el);
    } else {
      var filteredArray = newArr.filter((element) => {
        return element == el;
      });
      if (filteredArray.length == 0) {
        newArr.push(el);
      }
    }
  }
  return newArr;
};

console.log(uniqueOrn([1, 2, 5, 4, 3], [4, 5, 6, 3, 2]));
console.log(uniqueOrn2([1, 2, 4, 5, 3, 21], [4, 5, 6, 3, 2]));
