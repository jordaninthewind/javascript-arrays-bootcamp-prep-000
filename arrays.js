var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, element) {
  array = [...array, element];
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
}

function addElementToEndOfArray(array, element) {
  array = [element, ...array];
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
}
