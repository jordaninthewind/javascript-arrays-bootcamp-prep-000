var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, element) {
  [...array, element];
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
}

function addElementToEndOfArray(array, element) {
  var array = [element, ...array];
  return array;
}

function destructivelyAddElementToEndOfArray() {
  array.pop(element);
}
