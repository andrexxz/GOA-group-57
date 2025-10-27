//1

const vowls = 'aeiou';

function disemvowel(str) {
  return str.split('').filter(letter => vowls.includes(letter.toLowerCase())).join('');
}

//2
function filter_list(l) {
  return l.filter(function(item) {
    return typeof item === 'number';
  });
}

//3
function elimination(arr){
  const eSet = new Set();
  for(const num of arr){
    if(eSet.has(num)){
      return num;
    }
    eSet.add(num);
  }
  return null;
}


//4

function minMax(arr){
  var max = arr[0], min = arr[0];
  for(var i=0; i<arr.length; i++) {
    if(arr[i]>max) max = arr[i];
    if(arr[i]<min) min = arr[i];
  }
  return [min,max];
}