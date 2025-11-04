//still stuck at codewars eeehhhhhhhhh
//2
function consecutive(arr) {
  var sorted = arr.sort(function(a, b) {return a-b;});
  var count = 0;
  for (var i = 0; i < sorted.length - 1; i++) {
    var diff = sorted[i+1] - sorted[i]
    if (diff > 1) {
      count += diff - 1
    }  
  }
  return count;
}
//3
function letterCheck(arr) {
for(let i = 0; i < arr[1].length; i++){
  if(arr[0].toLowerCase().includes(arr[1][i])){continue;}
  else{return false;}
}
  return true;
}