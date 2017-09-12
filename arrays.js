var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, element) {
  var array = [element, ...array];
  console.log(array);
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
}

function addElementToEndOfArray(array, element) {
  var array = [...array, element];
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
}
