// Project Title

function myIncludes(array, item) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      return true;
    }
  }
  return false;
}
